import FilmDetail from '../entities/film_detail.entity.js';

/**
 * getAllFilmDetail()
 * @returns {Promise<FilmDetail>}
 */
function getAllFilmDetails() {
    return new Promise((res, rej) => {
        FilmDetail.find({})
            .populate('episode')
            .populate({ 
                path: 'seasons',
                populate: { path: 'episodes', model: 'episode'} 
            })
            .exec((err, data) => {
                if (err) rej(err)
                res(data)
        })
    })
}
/**
 * Save new FilmDetail
 * @param {FilmDetail} newFilmDetail - The new FilmDetail
 * @returns {Promise<FilmDetail>}
 */
function save(newFilmDetail) {      
    return new Promise((res, rej) => {
        newFilmDetail.save((err, data) => {
                    if (err) rej(err);
                    res(data);
            })
    })
}

/**
 * getFilmDetailById()
 * @returns {Promise<FilmDetail>}
 */
function getFilmDetailById(id) {
    return new Promise((res, rej) => {
        FilmDetail.findOne({ _id: id })
        .populate('episode')
        .populate({ 
            path: 'seasons',
            populate: { path: 'episodes', model: 'episode'}
        })
        .exec((err, data) => {
            if (err) rej(err)
            res(data)
        })
    })
}

export default {
    save, 
    getAllFilmDetails,
    getFilmDetailById
};