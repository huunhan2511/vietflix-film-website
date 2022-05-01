import filmModel from '../models/film.model.js'
import Film from '../entities/film.entity.js'
// import errorMessage from '../helpers/error.message.helper.js';

function getAllFilms() {
    try {
        return filmModel.getAllFilms();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getFilmById(id){
    try {
        return filmModel.getFilmById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(input){
    try {
        let newFilm = new Film(input)
        let err = newFilm.validateSync()
        if (err) return errorMessage(err)      
        let film = await filmModel.save(newFilm)
        return film;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllFilms,
    save,
    getFilmById
}
