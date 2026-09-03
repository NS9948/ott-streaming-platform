const User = require('../models/User')

const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")

const signupController = async (req,res) => {
    const {email,password, gender, phone, dob } = req.body
    if(!email || !password || !gender || !dob){
        return res.status(400).json({
            message: "Enter all the details to continue"
        })
    }

    let existingUser;
    try {
        existingUser = await User.findOne({ email})
        if(existingUser){
            return res.status(409).json({
                message: "User already exists"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something broke!!"
        })
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password,10)

        await User.create({
            email,
            password: hashedPassword,
            gender,
            phone,
            dob
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something broke!!"
        })
    }

    
    res.status(201).json({
        message: "User created successfully"
    });
}

const signinController = async (req,res) => {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                message: "Enter the details to proceed"
            })
        }

            const foundUser = await User.findOne({ email })

            if(!foundUser){
                return res.status(404).json({
                    message: "User not found"
                })
            }

            const isPasswordCorrect = await bcrypt.compare(password,foundUser.password)

            if(!isPasswordCorrect){
                return res.status(401).json({
                    message: "Invalid Password"
                })
            }

        const payload ={
            id: foundUser._id,
            email: foundUser.email,
            role: foundUser.role
        }
    
        const token = JWT.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })
    
        return res.status(200).json({
            message: "Login successful",
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something broke!!"
        })
    }

}



module.exports = {
    signinController,
    signupController
}