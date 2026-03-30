import express from "express";

import blogController from "../controller/blogController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("image"), blogController.addBlog);
router.get("/allBlog", blogController.getAllBlog);
router.get("/:id", blogController.getSingleBlog);
router.patch("/:id", upload.single("image"), blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export default router;