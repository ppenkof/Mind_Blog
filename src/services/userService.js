import User from '../models/User.js';  
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/tokenUtils.js';

export async function register(email, password, repeatPasword) {
    const user = await User.findOne({ email });

    if (user) {
        throw new Error('Email is already in use'); 
    }

    if(password!==repeatPasword){
        throw new Error('Passwords do not match');
    }

    const createdUser = await User.create({ email, password }); 
    const token = generateToken(createdUser);
    return token;
}

export async function login(email, password) {
    const user = await User.findOne({ email });
    
    if (!user) {
        throw new Error('Invalid email or password'); 
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password'); 
    }   

    const token = generateToken(user);
    return token;
}