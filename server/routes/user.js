import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { userModel } from '../models/users';
const router = express.Router();

router.post('/register', async(req, res) => {
    const {username, password} = req.body;
    const user = await userModel.findOne({ username});

    if(user){
        return res.json({message: "user already exists"})
    } else {

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({username, password: hashedPassword})
        newUser.save();

        res.json({message: "user registred successfully"})
    }
    
})

router.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const user = await userModel.find({ username })

    if(!user){
        return res
        .status(400)
        .json({ message: "user doesn't exist! "})
    } else {
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            return res
            .status(400)
            .json({ message: "Username or password is incorrect! "})
        } else {
            const token = jwt.sign({id: user._id}, "secret")
            res.json({token, userID: user._id})
        }
    }
})

export {router as userRouter};