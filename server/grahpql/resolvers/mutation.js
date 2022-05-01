import data from '../../dummyData/data.js';
import episodeCtrl from '../../controllers/episode.controller.js';
import genreCtrl from '../../controllers/genre.controller.js';
import filmTypeCtrl from '../../controllers/film_type.controller.js';
import seasonCtrl from '../../controllers/season.controller.js';
import filmDetailCtrl from '../../controllers/film_detail.controller.js';
import filmCtrl from '../../controllers/film.controller.js';

let Mutation = {
    createEpisode: (parent, {input}) =>  episodeCtrl.save(
        input.name,
        input.time,
        input.link_embed,
        input.link_m3u8),
    createGenre: (parent, {input}) => genreCtrl.save(input.name),   
    createFilmType: (parent, {input}) => filmTypeCtrl.save(input.name),
    createSeason: (parent, {input}) => seasonCtrl.save(input.name, input.total_episodes, input.episodes),
    createFilmDetail: (parent, {input}) => filmDetailCtrl.save(input),
    createFilm: (parent, {input}) => filmCtrl.save(input)
}

export default Mutation;