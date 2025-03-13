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

const validateIsAdminRequest = (req, res, next) => {
    if(!req.body.id){
        return res.status(403).json({
            data: {},
            success: false,
            message: 'Something went wrong',
            err: 'User Id not given'
        });
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
};