const {User} = require('../models/index');

class UserRepository{
    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }
        catch(err){
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async destroy(id){
        try{
            const user = await User.findByPk(id);
            await user.destroy();
            return user;
        }
        catch(err){
            console.log("something went wrong on user repository");
            throw err;
        }
    }

    async getById(id){
        try{
            const user = await User.findByPk(id, {
                attributes: ['id', 'email']
            });
            return user;
        }
        catch(err){
            console.log("something went wrong on user repository");
            throw err;
        }
    }
}

module.exports = UserRepository;