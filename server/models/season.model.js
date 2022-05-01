import Season from '../entities/season.entity.js';

/**
 * getAllSeason()
 * @returns {Promise<Season>}
 */
function getAllSeasons() {
    return new Promise((res, rej) => {
        Season.find({})
            .populate('episodes')
            .exec((err, data) => {
                if (err) rej(err)
                res(data)
            })
    })
}
/**
 * Save new Season
 * @param {Season} newSeason - The new Season
 * @returns {Promise<Season>}
 */
function save(newSeason) {      
    return new Promise((res, rej) => {
        newSeason.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getSeasonById()
 * @returns {Promise<Season>}
 */
 function getSeasonById(id) {
    return new Promise((res, rej) => {
        Season.findOne({ _id: id })
            .populate('episodes')
            .exec((err, data) => {
                if (err) rej(err)
                res(data)
            })
    })
}

export default {
    save, 
    getAllSeasons,
    getSeasonById
};