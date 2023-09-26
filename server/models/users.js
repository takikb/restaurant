import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema({
    userName : {type: String, required: true, unique: true},
    passWord : {type: String, required: true}
})

export const userModel = mongoose.model("users", userSchema);