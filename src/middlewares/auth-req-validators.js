const validateUserAuth = (req, res, next) => {   
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Email and password are required',
            err: {}
        });
    }
    next();
}

module.exports = {
    validateUserAuth
};