import Film from '../models/film.entity.js.js';

/**
 * getAllFilm()
 * @returns {Promise<Film>}
 */
function getAllFilms() {
    return new Promise((res, rej) => {
        Film.find({})
            .populate('genres')
            .populate('filmType')           
            .populate({ 
                path: 'filmDetail',
                populate: { 
                    path: 'episode'}
            })
            .populate({ 
                path: 'filmDetail',
                populate: { 
                    path: 'seasons', 
                    populate: {
                        path: 'episodes'
                    }}
            })
            .exec((err, data) => {
                if (err) rej(err)
                res(data)
            })
    })
}
/**
 * Save new Film
 * @param {Film} newFilm - The new Film
 * @returns {Promise<Film>}
 */
function save(newFilm) {      
    return new Promise((res, rej) => {
        newFilm.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getFilmById()
 * @returns {Promise<Film>}
 */
 function getFilmById(id) {
    return new Promise((res, rej) => {
        Film.findOne({ _id: id })
        .populate('genres')
        .populate('filmType')           
        .populate({ 
            path: 'filmDetail',
            populate: { 
                path: 'episode'}
        })
        .populate({ 
            path: 'filmDetail',
            populate: { 
                path: 'seasons', 
                populate: {
                    path: 'episodes'
                }}
        })
        .exec((err, data) => {
            if (err) rej(err)
            res(data)
        })
    })
}

export default {
    save, 
    getAllFilms,
    getFilmById
};