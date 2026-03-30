```
📝 Blog Post Management API

A RESTful API for managing blog posts built with Node.js, Express.js, and MongoDB. This project follows the MVC architecture and provides full CRUD functionality for handling blog content efficiently.

The API also supports image upload using Multer and stores images on Cloudinary, ensuring scalable and optimized media management.

The API is tested using Postman and deployed on Render.

🚀 Live API

https://your-blog-api.onrender.com/

Test the server:
GET /

✨ Features
📝 Create a new blog post with image upload
📃 Get all blog posts
🔎 Get blog post by ID
✏️ Update blog post details
❌ Delete a blog post
🖼 Upload blog images using Multer
☁️ Store images on Cloudinary
⚠️ Centralized error handling
🧩 Clean MVC architecture
🗄 MongoDB database integration
🧪 API testing with Postman
☁️ Deployment on Render

🛠 Tech Stack
Technology	Usage
Node.js	Runtime Environment
Express.js	Backend Framework
MongoDB	Database
Mongoose	MongoDB ODM
Multer	File Upload Middleware
Cloudinary	Cloud Image Storage
dotenv	Environment Variables
Postman	API Testing
Render	Deployment

📁 Project Structure
BLOG-POST-API
│
├── controller
│   └── BlogController.js
│
├── db
│   └── mongoose.js
│
├── middleware
│   ├── HttpError.js
│   └── upload.js
│
├── config
│   └── cloudinary.js
│
├── model
│   └── BlogModel.js
│
├── routes
│   └── BlogRoute.js
│
├── .env
├── app.js
├── package.json
└── README.md

📌 API Endpoints
Method	Endpoint	Description
GET	/	Check server
POST	/blogs	Create blog with image
GET	/blogs	Get all blogs
GET	/blogs/:id	Get blog by ID
PATCH	/blogs/:id	Update blog
DELETE	/blogs/:id	Delete blog

🧪 API Testing (Postman)
```
📸 Screenshots
Server Check

Create Blog

Get All Blogs

Get Blog by ID

Update Blog

Delete Blog

```
📦 Blog Data Example
{
  "title": "How to Learn Node.js",
  "content": "Node.js is a powerful runtime environment...",
  "author": "Vaishali Chauhan",
  "createdAt": "2026-03-30",
  "image": "cloudinary-image-url"
}

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/blog-post-api.git
2️⃣ Go to project folder
cd blog-post-api
3️⃣ Install dependencies
npm install
4️⃣ Create .env file

PORT=5000

MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

5️⃣ Run the server
npm run dev

OR

node app.js
🌐 Server runs on

http://localhost:5001

👩‍💻 Author

Chauhan Vaishali
Frontend Developer Student
Government Engineering College, Bhavnagar

🔗 Connect with Me
GitHub: https://github.com/vaishali2801
LinkedIn: https://www.linkedin.com/in/vaishalich2801
