const adminCheck = (req,res,next) => {
    const role = req.user.role;

    if(role === "admin"){
        next()
    }else{
        return res.status(403).json({
            message: "Forbidden. Admin access required."
        })
    }
}

module.exports = adminCheck;