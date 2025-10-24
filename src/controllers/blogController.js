import { Router } from "express";

const blogController = Router();

blogController.get('/create', (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', (req, res) => {
    const blogData = req.body;
});

export default blogController;