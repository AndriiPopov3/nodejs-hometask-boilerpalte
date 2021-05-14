const UserService = require('./userService');

class AuthService {
    login(userData) {
        console.log("authService");
        const user = UserService.search(userData);
        console.log("after getone user = " + user);
        if(!user) {
            console.log("user is null");
            throw Error('User not found');
        }
        return user;
    }
}

module.exports = new AuthService();