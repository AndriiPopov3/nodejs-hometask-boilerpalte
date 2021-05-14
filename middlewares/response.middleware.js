const e = require("express");

const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
   if(res.data){
    console.log(200);
        return res.status(200).send(res.data);
   } else {
        console.log(404);
        return res.status(404).send({
            error: true,
            message: `${res.err}`
        });
   }

    next();
}

exports.responseMiddleware = responseMiddleware;