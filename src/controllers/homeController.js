import { Router } from "express";
import { blogService } from "../services/index.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const latestBlogs = await blogService.getLatest();

    res.render('home', {blogs: latestBlogs});//, { pageTitle: 'Home Page' }
});



export default homeController;