import mongoose from "mongoose";
import Film from "./film.js";

const GENRE_FOREIGN_KEY_EXCEPTION = 'Cannot delete genre. Films have a reference to this genre.';

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, { timestamps: { currentTime: () => (Date.now() + 25200000) }, versionKey: false });

genreSchema.pre('findOneAndRemove', isSafeRemove);

async function isSafeRemove(next) {
    try {
        const genreId = this.getQuery()._id;
        const filmsWithGenre = await Film.find({ genres: genreId }).exec();

        if (filmsWithGenre && filmsWithGenre.length > 0) {
            return next(new Error(GENRE_FOREIGN_KEY_EXCEPTION));
        }

        next();
    } catch (error) {
        next(error);
    }
}

const Genre = mongoose.model('genre', genreSchema);
export default Genre;