import jwt from 'jsonwebtoken'

function generateTokenAndSetCookie(userId, res){
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '150d'
    });
    
    res.cookie('jwt', token, {
        maxAge: 150 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true,               // prevent XSS attacks
        sameSite: "strict",           // prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development"
    })
};

export default generateTokenAndSetCookie;
