import mongoose from "mongoose";
const flimTypeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const FilmType = mongoose.model('film_type', flimTypeSchema);
export default FilmType;