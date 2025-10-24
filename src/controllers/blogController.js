import { Router } from "express";
import {blogService} from "../services/index.js"; 
import { isAuth } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";

const blogController = Router();

blogController.get('/', async (req, res) => {
    const blogs = await blogService.getAll();

    res.render('blogs', { blogs });
});

blogController.get('/create', (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId = req.user._id;

    try {
        await blogService.create(blogData, userId)
        res.redirect('/blogs');

    } catch (error) {

        res.render('blogs/create', {
        error: getErrorMessage(error),
         blog: blogData,
        });

    }
        
});

blogController.get('/:blogId/details', async (req, res) => {
    const blogId = req.params.blogId;
    const userId = req.user._id;
    // console.log(userId);
    // console.log(req.user);

    const blog = await blogService.getOne(blogId);
    const isOwner = blog.owner.equals(userId);
    // console.log(isOwner);
    const followers = blog.followers.map(f=>f.email).join(', ');
    const isFollowing = blog.followers.some(f=>f.equals(userId));

    res.render('blogs/details', { blog, isOwner, followers, isFollowing });
});

blogController.get('/:blogId/follow', isAuth, async (req, res) => {
    const blogId = req.params.blogId;
    const userId = req.user._id;

    await blogService.follow(blogId, userId);
    res.redirect(`/blogs/${blogId}/details`);
});

export default blogController;