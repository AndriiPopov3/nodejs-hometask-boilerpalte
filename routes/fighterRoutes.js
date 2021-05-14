const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.post('/', (req, res, next) => {
    try {
        const newFighterData = { 
            name: req.body.name,
            power: req.body.power,
            defense: req.body.defense
        };
        const fighterName = {
            name: req.body.name
        }
        const nameCheck = FighterService.isNameTaken(fighterName);
        res.data = newFighterData;
        console.log("res.data = ", res.data);
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, createFighterValid, (req, res, next) => {
    const data = FighterService.createFighter(res.data);
    return res.status(200).send(res.data);
}); 

router.get('/', (req, res, next) => {
    try {
        const fighters = FighterService.getFighters();
        if(!fighters.length){
            throw Error("Fighter list is empty");
        }
        res.data = fighters;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const fighterId = {
            id: req.url.slice(1)
        }
        const fighter = FighterService.search(fighterId);
        if(!fighter){
            throw Error("Fighter not found");
        }
        res.data = fighter;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const fighter = FighterService.deleteFighter(req.url.slice(1));
        if(!fighter.length){
            throw Error("Fighter not found");
        }
        res.data = fighter;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    try {
        const updatedData = {
            name: req.body.name,
            power: req.body.power,
            defense: req.body.defense
        }
        const fighterName = {
            name: req.body.name
        }
        const findFighter = FighterService.search({ id: req.url.slice(1) });
        if(!findFighter){
            throw Error("Fighter not found");
        }
        const nameCheck = FighterService.isNameTaken(fighterName);

        res.data = updatedData;
    } catch (err){
        res.err = err;
    } finally {
        next();
    }
    
}, updateFighterValid, (req, res, next) => {
    const data = FighterService.updateFighter(req.url.slice(1), res.data);
    return res.status(200).send(res.data);
}); 

module.exports = router;