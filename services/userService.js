const { user } = require('../models/user');
const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    signUp(userData) {
        const item = UserRepository.create(userData);
        if(!item) {
            return null;
        }
        return item;
    }
    
    isEmailTaken(userData){
        const user = this.search(userData);
        if(user) {
            throw Error('A user with this email already exists');
        }
        return false;
    }

    isPhoneTaken(userData){
        const user = this.search(userData);
        if(user) {
            throw Error('A user with this phone already exists');
        }
        return false;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getUsers(){
        const users = UserRepository.getAll();
        if(!users) {
            return null;
        }
        return users;
    }

    deleteUser(userId){
        const users = UserRepository.delete(userId);
        if(!users) {
            return null;
        }
        return users;
    }

    updateUser(userId, updatedData){
        const users = UserRepository.update(userId, updatedData);
        if(!users) {
            return null;
        }
        return users;
    }
}

module.exports = new UserService();