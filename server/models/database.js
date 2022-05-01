import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

function connect(){
    const url = process.env.DB_URL;   
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('[moviebe] database connect successfully');
    })
    .catch(err => {
        console.log('[moviebe] failed to connect database');
    });
}
export default connect;