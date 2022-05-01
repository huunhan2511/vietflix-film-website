import Genre from '../entities/genre.entity.js';

/**
 * getAllGenre()
 * @returns {Promise<Genre>}
 */
function getAllGenres() {
    return new Promise((res, rej) => {
        Genre.find({})
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}
/**
 * Save new Genre
 * @param {Genre} newGenre - The new Genre
 * @returns {Promise<Genre>}
 */
function save(newGenre) {      
    return new Promise((res, rej) => {
        newGenre.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getGenreById()
 * @returns {Promise<Genre>}
 */
 function getGenreById(id) {
    return new Promise((res, rej) => {
        Genre.findOne({ _id: id })
                .exec((err, data) => {
                    if (err) rej(err)
                    res(data)
            })
    })
}

export default {
    save, 
    getAllGenres,
    getGenreById
};