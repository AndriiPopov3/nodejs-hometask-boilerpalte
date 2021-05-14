const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    isNameTaken(fighterName){
        const fighter = this.search(fighterName);
        console.log(fighter);
        if(fighter) {
            throw Error('A fighter with this name already exists');
        }
        return false;
    }

    createFighter(fighterData) {
        const item = FighterRepository.create(fighterData);
        console.log(item);
        if(!item) {
            return null;
        }
        return item;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getFighters(){
        const fighters = FighterRepository.getAll();
        if(!fighters) {
            return null;
        }
        return fighters;
    }

    deleteFighter(fighterId){
        const fighter = FighterRepository.delete(fighterId);
        if(!fighter) {
            return null;
        }
        return fighter;
    }

    updateFighter(fighterId, updatedData){
        const fighter = FighterRepository.update(fighterId, updatedData);
        if(!fighter) {
            return null;
        }
        return fighter;
    }
}

module.exports = new FighterService();