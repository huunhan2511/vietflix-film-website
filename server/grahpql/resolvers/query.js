import data from '../../dummyData/data.js';
import episodeCtrl from '../../controllers/episode.controller.js';
import genreCtrl from '../../controllers/genre.controller.js';
import filmTypeCtrl from '../../controllers/film_type.controller.js';
import seasonCtrl from '../../controllers/season.controller.js';
import filmDetailCtrl from '../../controllers/film_detail.controller.js';
import filmCtrl from '../../controllers/film.controller.js';

const Query = {
            hello: () => "hello",
            
            films: () => filmCtrl.getAllFilms(),
            film: (parent, args) => filmCtrl.getFilmById(args.id),

            genres: () => genreCtrl.getAllGenres(),
            genre: (parent, args) => genreCtrl.getGenreById(args.id),

            filmTypes: () => filmTypeCtrl.getAllFilmTypes(),
            filmType: (parent, args) => filmTypeCtrl.getFilmTypeById(args.id),

            filmDetails: () => filmDetailCtrl.getAllFilmDetails(),
            filmDetail: (parent, args) => filmDetailCtrl.getFilmDetailById(args.id),

            seasons: () => seasonCtrl.getAllSeasons(),
            season: (parent, args) => seasonCtrl.getSeasonById(args.id),

            episodes: () =>  episodeCtrl.getAllEpisodes(),
            episode: (parent, args) => episodeCtrl.getEpisodeById(args.id)

            // episodes: () =>  episodeCtrl.getAllEpisodes(),
            // episode: (parent, args) => data.dataEpisode.find(episode => episode.id.toString() === args.id)
}
    // Film: {
    //     genre: (parent, args) => data.dataGenre.filter(item => parent.genre.includes(item.id)),
    //     filmType: (parent, args) => data.dataFilmType.find(item => item.id === parent.filmType),
    //     filmDetail: (parent, args) => data.dataFilmDetail.find(item => item.id === parent.id)
    // },

    // Genre: {
    //     films: (parent, args) => data.dataFilms.filter(item => item.genre.includes(parent.id))
    // },

    // FilmType: {
    //     films: (parent, args) => data.dataFilms.filter(item => item.filmType === parent.id)
    // },

    // FilmDetail: {
    //     seasons: (parent, args) => data.dataSeason.filter(item => parent.seasons.includes(item.id)),
    //     episode: (parent, args) => data.dataEpisode.find(item => item.id === parent.episode)
    // }

export default Query;