const { User, Role } = require('../models/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        }
        catch (err) {
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async destroy(id) {
        try {
            const user = await User.findByPk(id);
            await user.destroy();
            return user;
        }
        catch (err) {
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async getById(id) {
        try {
            const user = await User.findByPk(id, {
                attributes: ['id', 'email']
            });
            return user;
        }
        catch (err) {
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async getByEmail(email) {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            return user;
        }
        catch (err) {
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async isAdmin(id) {
        try {
            const user = await User.findByPk(id);
            const adminRole = await Role.findOne({
                where: {
                    name: 'Admin'
                }
            });
            return user.hasRole(adminRole);
        }
        catch (err) {
            console.log("something went wrong on user repository");
            throw err;
        }
    }
}

module.exports = UserRepository;