import cloudinary from "../config/cloudinary.js";
import HttpError from "../middleware/HttpError.js";
import Blog from "../model/blogModel.js";

const addBlog = async (req, res, next) => {
    try {
        const { title, author, content } = req.body;
        if (!req.file) {
            return next(new HttpError("File image or video is required", 400));
        }
        const newBlog =await Blog.create({
            title,
            author,
            content,
            image: req.file.path,
            cloudinary_id: req.file.filename,
        });
        res.status(201).json({ success: true,message:"blog added successfully", newBlog });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const getAllBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find({});
        if (blogs.length === 0) {
            return res.status(200).json({ message: "blog not found"});
        }
        res.status(200).json({ success: true,message:"blogs fetched successfully!", blogs });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const getSingleBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return next(new HttpError("Blog not found", 404));
        }
        res.status(200).json({ success: true,message:"blog fetched successfully", blog });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const updateBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return next(new HttpError("Blog not found", 404));
        }
        if (Object.keys(req.body).length === 0 && !req.file){
            return next(new HttpError("No update data provided", 400));
        }
        const update = Object.keys(req.body);
        const allowedUpdates = ["title", "author", "content"];
        const isValid = update.every((field) => {
            return allowedUpdates.includes(field);
        });
        if (!isValid) {
            return next(new HttpError("invalid update fields", 400));
        }
        update.forEach((update) => {
            blog[update] = req.body[update];
        });
        if (req.file) {
            if (blog.cloudinary_id) {
                await cloudinary.uploader.destroy(blog.cloudinary_id);
            }
            blog.image = req.file.path;
            blog.cloudinary_id = req.file.filename;
        }
        await blog.save();
        res.status(200).json({ success: true, message: "Blog data Update Successfully!", blog });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};
//DELETE BLOG
const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return next(new HttpError("Blog Not found",404));
        }
        if (blog.cloudinary_id) {
            await cloudinary.uploader.destroy(blog.cloudinary_id);
        }
        await blog.deleteOne();
        res.status(200).json({ success: true, message: "Blog deleted successfully!"});
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

export default { addBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog };