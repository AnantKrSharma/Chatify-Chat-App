
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

async function protectRoute(req, res, next){

    try{ 
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({
                msg: "Unauthorized"
            })
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if(!verified){
            return res.status(401).json({
                msg: "Unauthorized"
            })
        }

        const user = await User.findById(verified.userId).select('-password');
        
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            })
        }

        req.user = user;

        next();
    }
    catch(error){
        console.log("Error in the protectRoute middlware - ", error.message);

        res.status(500).json({
            errors: "Error while authenticating the user."
        })
    }
}


export default protectRoute;
