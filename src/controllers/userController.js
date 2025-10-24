import { Router } from "express";
import {userService} from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";


const userController = Router();  

//Register GET
userController.get('/register', isGuest,(req, res) => {
    res.render('users/register');
}); 

//Register POST
userController.post('/register', isGuest, async (req, res) => {
    const {email, password, repeatPassword} = req.body;

    try {
        const token = await userService.register(email, password, repeatPassword);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        res.status(400).render('users/register', {
            error: getErrorMessage(error),
            user: {email}
        });
    }
   
});

//Login GET
userController.get('/login', isGuest, (req, res) => {
    res.render('users/login');
});

//Login POST
userController.post('/login', isGuest, async (req, res) => {
    const {email, password} = req.body;

    try {
        const token = await userService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        res.status(404).render('users/login', {
            error: getErrorMessage(error),
            user: {email}
        });
    }

});

//Logout GET
userController.get('/logout', isAuth,(req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default userController;