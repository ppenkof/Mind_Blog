import { Schema, model, Types } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Blog title is required!'],
        minLength: [5, 'Blog title must be at least 5 characters long!'],
        maxLength: [50, 'Blog title must be at most 50 characters long!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Blog image is required!'],
        match: [/^https?:\/\//, 'Image URL must start with http:// or https://'],
    },
    content: {
        type: String,
        required: [true, 'Blog content is required!'],
        minLength: [10, 'Blog content must be at least 10 characters long!'],
    },
    category: {
        type: String,
        required: [true, 'Blog catagory is required!'],
        minLength: [3, 'Blog catagory must be at least 3 characters long!'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
    followers: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
       // timestamps:true
});

const Blog = model('Blog', blogSchema);

export default Blog;