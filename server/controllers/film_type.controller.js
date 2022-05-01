import FilmTypeModel from '../models/film_type.model.js';
import Type from '../entities/film_type.entity.js';
// import errorMessage from '../helpers/error.message.helper.js';

function getAllFilmTypes() {
    try {
        return FilmTypeModel.getAllFilmTypes();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getFilmTypeById(id){
    try {
        return FilmTypeModel.getFilmTypeById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(name){
    try {
        let newFilmType = new Type({"name": name})
        let err = newFilmType.validateSync()
        if (err) return errorMessage(err)      
        let FilmType = await FilmTypeModel.save(newFilmType)
        return FilmType;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllFilmTypes,
    save,
    getFilmTypeById
}
