import { Router } from "express";
import { blogService } from "../services/index.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const latestBlogs = await blogService.getLatest();

    res.render('home', {blogs: latestBlogs});//, { pageTitle: 'Home Page' }
});

homeController.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;

    const createdBlogs = await blogService.getAllByOwner(userId);
    //const createdBlogsCount = createdBlogs.length; //You can use this or helpers 'count' in views to get the count
    res.render('profile', {createdBlogs});
});


export default homeController;