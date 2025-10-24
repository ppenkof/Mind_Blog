import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Blog title is required!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Blog image is required!'],
    },
    content: {
        type: String,
        required: [true, 'Blog content is required!'],
    },
    category: {
        type: String,
        required: [true, 'Blog catagory is required!'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Blog = model('Blog', blogSchema);

export default Blog;