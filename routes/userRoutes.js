const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', (req, res, next) => {
    try {
        const signUpData = { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        };
        const userEmail = {
            email: req.body.email
        }
        const userPhone = {
            phoneNumber: req.body.phoneNumber
        }
        const emailCheck = UserService.isEmailTaken(userEmail);
        const phoneCheck = UserService.isPhoneTaken(userPhone);
        res.data = signUpData;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, createUserValid, (req, res, next) => {
    const data = UserService.signUp(res.data);
    return res.status(200).send(res.data);
}); 

router.get('/', (req, res, next) => {
    try {
        const users = UserService.getUsers();
        if(!users.length){
            throw Error("User list is empty");
        }
        res.data = users;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const userId = {
            id: req.url.slice(1)
        }
        console.log(userId);
        const user = UserService.search(userId);
        if(!user){
            throw Error("User not found");
        }
        res.data = user;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const user = UserService.deleteUser(req.url.slice(1));
        if(!user.length){
            throw Error("User not found");
        }
        res.data = user;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    try {
        const updatedData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        }
        const userEmail = {
            email: req.body.email
        }
        const userPhone = {
            phoneNumber: req.body.phoneNumber
        }
        const findUser = UserService.search({ id: req.url.slice(1) });
        if(!findUser){
            throw Error("User not found");
        }
        const emailCheck = UserService.isEmailTaken(userEmail);
        const phoneCheck = UserService.isPhoneTaken(userPhone);

        res.data = updatedData;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, updateUserValid, (req, res, next) => {
    const data = UserService.updateUser(req.url.slice(1), res.data);
    return res.status(200).send(res.data);
}); 

module.exports = router;