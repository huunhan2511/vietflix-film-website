import Episode from '../entities/episode.entity.js';

/**
 * getAllEpisode()
 * @returns {Promise<Episode>}
 */
function getAllEpisodes() {
    return new Promise((res, rej) => {
        Episode.find({})
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}
/**
 * Save new Episode
 * @param {Episode} newEpisode - The new Episode
 * @returns {Promise<Episode>}
 */
function save(newEpisode) {      
    return new Promise((res, rej) => {
        newEpisode.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getEpisodeById()
 * @returns {Promise<Episode>}
 */
 function getEpisodeById(id) {
    return new Promise((res, rej) => {
        Episode.findOne({ _id: id })
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}

export default {
    save, 
    getAllEpisodes,
    getEpisodeById
};