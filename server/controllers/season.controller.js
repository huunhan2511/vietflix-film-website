import seasonModel from '../models/season.model.js'
import Season from '../entities/season.entity.js'
// import errorMessage from '../helpers/error.message.helper.js';

function getAllSeasons() {
    try {
        return seasonModel.getAllSeasons();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getSeasonById(id){
    try {
        return seasonModel.getSeasonById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(name, total_episodes, episodes){
    try {
        let newSeason = new Season({
            name: name,
            total_episodes: total_episodes,
            episodes: episodes
        })
        console.log(newSeason)
        let err = newSeason.validateSync()
        if (err) return err      
        let season = await seasonModel.save(newSeason)
        return season;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllSeasons,
    save,
    getSeasonById
}
