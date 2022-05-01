import filmDetailModel from '../models/film_detail.model.js'
import FilmDetail from '../entities/film_detail.entity.js'
// import errorMessage from '../helpers/error.message.helper.js';

function getAllFilmDetails() {
    try {
        return filmDetailModel.getAllFilmDetails();
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
function getFilmDetailById(id){
    try {
        return filmDetailModel.getFilmDetailById(id);      
    } catch (err) {
        // return errorMessage(err);
        return err;
    }
}
async function save(input){
    try {
        console.log(input)
        let newFilmDetail = new FilmDetail(input)
        let err = newFilmDetail.validateSync()
        if (err) return errorMessage(err)      
        let filmDetail = await filmDetailModel.save(newFilmDetail)
        return filmDetail;
    } catch (err) {
        // return errorMessage(err)
        return err;
    }
}


export default {
    getAllFilmDetails,
    save,
    getFilmDetailById
}

