import {Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: { 
        type: String, 
        required: [true, 'User email is required!'],
    },
    password: { 
        type: String, 
        required: [true, 'User password is required!'],
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