import mongoose from "mongoose";
const seasonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    total_episodes: {
        type: String,
    },
    episodes: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'episode'}]
    }
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Season = mongoose.model('season', seasonSchema);
export default Season;