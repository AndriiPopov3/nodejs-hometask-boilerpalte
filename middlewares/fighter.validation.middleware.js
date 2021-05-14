const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    if(res.data){
        if (typeof(fighter) === typeof(res.data) && Array.isArray(Object.keys(fighter).slice(1)) &&
        Array.isArray(Object.keys(res.data))) {
            if(res.data.name === undefined || 
                res.data.power === undefined || 
                res.data.defense === undefined || 
                res.data.firstName === "" || 
                res.data.lastName === "" || 
                res.data.email === "") {
                     return res.status(400).send({
                        error: true,
                        message: "Fields cannot be empty"
                     });
             }
             if((res.data.power > 100 || res.data.power < 1)){
                 return res.status(400).send({
                     error: true,
                     message: "Power level must be in 1-100 range"
                  });
             }
             if((res.data.defense > 10 || res.data.defense < 1)){
                 return res.status(400).send({
                     error: true,
                     message: "Defense level must be in 1-10 range"
                  });
             }
             next();
        }else{
            return res.status(400).send({
                error: true,
                message: `Invalid fighter entity`
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

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    if(res.data){
        if (typeof(fighter) === typeof(res.data) && Array.isArray(Object.keys(fighter).slice(1)) &&
        Array.isArray(Object.keys(res.data))) {
            if(res.data.name === undefined || 
                res.data.power === undefined || 
                res.data.defense === undefined || 
                res.data.firstName === "" || 
                res.data.lastName === "" || 
                res.data.email === "") {
                     return res.status(400).send({
                        error: true,
                        message: "Fields cannot be empty"
                     });
             }
             if((res.data.power > 100 || res.data.power < 1)){
                 return res.status(400).send({
                     error: true,
                     message: "Power level must be in 1-100 range"
                  });
             }
             if((res.data.defense > 10 || res.data.defense < 1)){
                 return res.status(400).send({
                     error: true,
                     message: "Defense level must be in 1-10 range"
                  });
             }
             next();
        }else{
            return res.status(400).send({
                error: true,
                message: `Invalid fighter entity`
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

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;