import mongoose from "mongoose";
const filmSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    genres: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'genre',}]
    },
    filmType: {
        type: mongoose.Schema.Types.ObjectId, ref: 'film_type',
    },
    filmDetail: {
        type: mongoose.Schema.Types.ObjectId, ref: 'film_detail', 
    }
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Film = mongoose.model('film', filmSchema);
export default Film;