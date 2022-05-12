import mongoose from "mongoose";
const filmSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
    },
    img: {
        type: String,
    },
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
        }
    ],
    filmType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'film_type',
    },
    filmDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'film_detail', 
    },
    description: {
        type: String,
    }
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Film = mongoose.model('film', filmSchema);
export default Film;