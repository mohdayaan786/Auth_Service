const  UserRepository  = require("../repository/user-repository");

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
}

module.exports = UserService;