import mongoose from "mongoose";
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Genre = mongoose.model('genre', genreSchema);
export default Genre;