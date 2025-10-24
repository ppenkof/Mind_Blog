import { JWT_SECRET } from "../config/constants.js";
import jwt from 'jsonwebtoken';

export function generateToken(user){
    const payload = {
        _id: user._id,
        email: user.email
    };  

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });//process.env.JWT_SECRET

    return token;
}