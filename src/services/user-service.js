const UserRepository = require("../repository/user-repository");
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');

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

     async signIn(email,plainPassword){
        try{
            const user = await this.userRepository.getByEmail(email);
            if(user){
                const isPasswordCorrect = this.checkPassword(plainPassword, user.password);
                if(isPasswordCorrect){
                    const token = this.createToken({
                        id: user.id,
                        email: user.email
                    });
                    return {token, user};
                }
                else{
                    throw new Error("Password is incorrect");
                }
            }
            else{
                throw new Error("User not found");
            }
        }
        catch(err){
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

    checkPassword(plainPassword, hashPassword){
        try{
            return bcrypt.compareSync(plainPassword, hashPassword);
        }
        catch(err){
            console.log("something went wrong in password verification");
            throw err;
        }
    }

    async isAuthenticated(token){
        try{
            const response = this.verifyToken(token);
            if(!response){
                throw {error : 'Invalid token'};
            }
            const user = this.userRepository.getById(response.id);
            if(!user){
                throw {error : 'No user with the corresponding token exists'}
            }
            return user.id;
        }
        catch(err){
            console.log("something went wrong on user service");
            throw err;
        }
    }
}

module.exports = UserService;