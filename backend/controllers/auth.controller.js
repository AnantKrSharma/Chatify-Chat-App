import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';

export async function signup(req, res){
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                errors: "Passwords don't match."
            })
        }

        const found = await User.findOne({username});
        if(found){
            return res.status(400).json({
                errors: "User already exists."
            })
        }
        
        // HASH PASSWORD HERE
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const created = await User.create({
            fullName,
            username,
            password: hashedPassword, 
            gender: gender.toLowerCase(),
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        generateTokenAndSetCookie(created._id, res);

        res.status(201).json({
            _id: created._id,
            fullName: created.fullName,
            username: created.username,
            profilePic: created.profilePic 
        })
    }    
    catch(error){
        console.log("Error in signup controller - ", error.message);

        res.status(500).json({
            errors: "Error while creating new user."
        })
    }
}


export async function login(req, res){
    try{
        const {username, password} = req.body;

        const user = await User.findOne({username})

        // To verify a password using bcryptjs with the user input password, you need to compare the hashed password stored in your database with the plaintext password provided by the user. The bcryptjs library provides the compare method for this purpose.
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "")
        
        if(!user || !isPasswordCorrect){
            return res.status(400).json({
                errors: "Invalid username or password / Error while logging in."
            })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    }
    catch(error){
        console.log("Error in login controller - ", error.message);

        res.status(500).json({
            errors: "Error occured while logging in."
        })
    }
}


export async function logout(req, res){
    try{
        res.cookie('jwt', '', {maxAge: 0})

        res.status(200).json({
            msg: "Logged out succesfully."
        })
    }
    catch(error){
        console.log("Error in logout controller - ", error.message);

        return res.status(400).json({
            errors: "Error while logging out."
        })
    }
}
