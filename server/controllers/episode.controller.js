import episodeModel from '../models/episode.model.js'
import Episode from '../entities/episode.entity.js'
// import errorMessage from '../helpers/error.message.helper.js';

function getAllEpisodes() {
    try {
        return episodeModel.getAllEpisodes();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getEpisodeById(id){
    try {
        return episodeModel.getEpisodeById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(name, time, link_embed, link_m3u8){
    try {
        let newEpisode = new Episode({
            "name": name,
            "time": time,
            "link_embed": link_embed,
            "link_m3u8": link_m3u8,
        })
        let err = newEpisode.validateSync()
        if (err) return errorMessage(err)      
        let episode = await episodeModel.save(newEpisode)
        return episode;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllEpisodes,
    save,
    getEpisodeById
}
