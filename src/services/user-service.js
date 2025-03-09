const UserRepository = require("../repository/user-repository");
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (err) {
            console.log("something went wrong on user service");
            throw err;
        }
    }

    async destroy(id) {
        try {
            const user = await this.userRepository.destroy(id);
            return user;
        }
        catch (err) {
            console.log("something went wrong on user service");
            throw err;
        }
    }

    async getById(id) {
        try {
            const user = await this.userRepository.getById(id);
            return user;
        }
        catch (err) {
            console.log("something went wrong on user service");
            throw err;
        }
    }

    createToken(user){
        try{
           const result = jwt.sign(user, JWT_KEY, {expiresIn: '1h'});
           return result;
        }
        catch(err){
            console.log("something went wrong in token creation");
            throw err;
        }
    }

    verifyToken(token){
        try{
            const result = jwt.verify(token, JWT_KEY);
            return result;
        }
        catch(err){
            console.log("something went wrong in token verification", err);
            throw err;
        }
    }
}

module.exports = UserService;