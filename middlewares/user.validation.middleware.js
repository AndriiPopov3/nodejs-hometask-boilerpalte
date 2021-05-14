const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    if(res.data){
        if (typeof(user) === typeof(res.data) && Array.isArray(Object.keys(user).slice(1)) &&
        Array.isArray(Object.keys(res.data)) &&
        Object.keys(user).slice(1).length === Object.keys(res.data).length &&
        Object.keys(user).slice(1).every((val, index) => val === Object.keys(res.data)[index])) {
            if(res.data.firstName === undefined || 
                res.data.lastName === undefined || 
                res.data.email === undefined || 
                res.data.phoneNumber === undefined ||
                res.data.password === undefined ||
                res.data.firstName === "" || 
                res.data.lastName === "" || 
                res.data.email === "" || 
                res.data.phoneNumber === "" ||
                res.data.password === "") {
                     return res.status(400).send({
                        error: true,
                        message: "Fields cannot be empty"
                     });
             }
             if(!res.data.email.includes("@gmail.com")){
                 return res.status(400).send({
                     error: true,
                     message: "Your email must be a Google account"
                  });
             }
             if(!res.data.phoneNumber.startsWith("+380")){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: must start with +380"
                  });
             }
             if(/[a-zA-Z]/.test(res.data.phoneNumber)){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: must not include letters"
                  });
             }
             if(res.data.phoneNumber.length != 13){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: wrong length"
                  });
             }
             if(res.data.password.length < 3){
                 return res.status(400).send({
                     error: true,
                     message: "Password is too short"
                  });
             }
             next();
        }else{
            return res.status(400).send({
                error: true,
                message: `Invalid user entity`
             });
        }
        
        
    }else{
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    if(res.data){
        if (typeof(user) === typeof(res.data) && Array.isArray(Object.keys(user).slice(1)) &&
        Array.isArray(Object.keys(res.data)) &&
        Object.keys(user).slice(1).length === Object.keys(res.data).length &&
        Object.keys(user).slice(1).every((val, index) => val === Object.keys(res.data)[index])) {
            if(res.data.firstName === undefined || 
                res.data.lastName === undefined || 
                res.data.email === undefined || 
                res.data.phoneNumber === undefined ||
                res.data.password === undefined ||
                res.data.firstName === "" || 
                res.data.lastName === "" || 
                res.data.email === "" || 
                res.data.phoneNumber === "" ||
                res.data.password === "") {
                     return res.status(400).send({
                        error: true,
                        message: "Fields cannot be empty"
                     });
             }
             if(!res.data.email.includes("@gmail.com")){
                 return res.status(400).send({
                     error: true,
                     message: "Your email must be a Google account"
                  });
             }
             if(!res.data.phoneNumber.startsWith("+380")){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: must start with +380"
                  });
             }
             if(/[a-zA-Z]/.test(res.data.phoneNumber)){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: must not include letters"
                  });
             }
             if(res.data.phoneNumber.length != 13){
                 return res.status(400).send({
                     error: true,
                     message: "Invalid phone number format: wrong length"
                  });
             }
             if(res.data.password.length < 3){
                 return res.status(400).send({
                     error: true,
                     message: "Password is too short"
                  });
             }
             next();
        }else{
            return res.status(400).send({
                error: true,
                message: `Invalid user entity`
             });
        }
        
        
    }else{
        return res.status(400).send({
            error: true,
            message: `${res.err}`
         });
    }
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;