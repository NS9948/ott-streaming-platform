const JWT = require("jsonwebtoken")

const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Authorization token is required"
        })
    }

    const parts = token.split(" ")
    let jwtToken;
    if(parts.length === 2 && parts[0] === "Bearer"){
        jwtToken = parts[1];
    }

    if(!jwtToken){
        return res.status(401).json({
            message: "Invalid Authorization format"
        })
    }

    let decodedToken;

    try {
        decodedToken = JWT.verify(jwtToken,process.env.JWT_SECRET)
        
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }

    req.user = decodedToken
    next()
}

module.exports = authMiddleware