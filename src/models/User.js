import {Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: { 
        type: String, 
        required: [true, 'Username is required!'], 
        minLength: [2, 'Username must be at least 2 characters long!'] ,
    },
    email: { 
        type: String, 
        required: [true, 'User email is required!'],
        minLength: [10, 'Email must be at least 10 characters long!'] ,
    },
    password: { 
        type: String, 
        required: [true, 'User password is required!'],
        minLength: [4, 'Password must be at least 4 characters long!'] ,
    },
});

//BONUS: Check repeatPassword in model. It is required 
// userSchema.virtual('repeatePassword')
//     .set(function(value) {
//         this._repeatePassword = value;
//     });
//     get(function() {
//         return this._repeatePassword;
//     });

// userSchema.pre('validate', function() {
//     if (this.isNew && this.password !== this._repeatePassword) {
//         throw new Error('Passwords missmatch');
//     }
// });

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model('User', userSchema);

export default User;