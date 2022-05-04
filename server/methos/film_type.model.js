import FilmType from '../models/film_type.entity.js.js';

/**
 * getAllFilmType()
 * @returns {Promise<FilmType>}
 */
function getAllFilmTypes() {
    return new Promise((res, rej) => {
        FilmType.find({})
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}
/**
 * Save new FilmType
 * @param {FilmType} newFilmType - The new FilmType
 * @returns {Promise<FilmType>}
 */
function save(newFilmType) {      
    return new Promise((res, rej) => {
        newFilmType.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getFilmTypeById()
 * @returns {Promise<FilmType>}
 */
 function getFilmTypeById(id) {
    return new Promise((res, rej) => {
        FilmType.findOne({ _id: id })
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}

export default {
    save, 
    getAllFilmTypes,
    getFilmTypeById
};