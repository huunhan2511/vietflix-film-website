import express from 'express'
import episodeCtrl from '../controllers/episode.controller.js'
// import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/', getAllEpisodes);
router.post('/', save);


function getAllEpisodes(req, res){
    episodeCtrl.getAllEpisodes().then((result) => {
        res.json(result)
    }).catch((error) => {
        res.status(402).json(error)
    })
}

function save(req, res){
    console.log(req.body.name)
    let {name, time, link_embed, link_m3u8} = req.body;

    episodeCtrl.save(name, time, link_embed, link_m3u8).then((result) => {
        res.json(result)
    }).catch((error) => {
        res.status(402).json({error})
    })
}

export default router;
