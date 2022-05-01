import mongoose from "mongoose";
const episodeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    time: {
        type: String,
    },
    link_embed: {
        type: String,
    },
    link_m3u8: {
        type: String,
    },
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Episode = mongoose.model('episode', episodeSchema);
export default Episode;