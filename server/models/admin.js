import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: {currentTime: () => (Date.now()+25200000)}, versionKey: false });

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;