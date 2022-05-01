import genreModel from '../models/genre.model.js'
import Genre from '../entities/genre.entity.js'
// import errorMessage from '../helpers/error.message.helper.js';

function getAllGenres() {
    try {
        return genreModel.getAllGenres();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getGenreById(id){
    try {
        return genreModel.getGenreById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(name){
    try {
        let newGenre = new Genre({"name": name})
        let err = newGenre.validateSync()
        if (err) return errorMessage(err)      
        let genre = await genreModel.save(newGenre)
        return genre;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllGenres,
    save,
    getGenreById
}
