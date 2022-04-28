import data from '../dummyData/data.js';
const resolvers = {
    Query: {
            hello: () => "hello",
            films: () => data.dataFilms,
            film: (parent, args) => data.dataFilms.find(film => film.id.toString() === args.id),

            genres: () => data.dataGenre,
            genre: (parent, args) => data.dataGenre.find(genre => genre.id.toString() === args.id),

            filmTypes: () => data.dataFilmType,
            filmType: (parent, args) => data.dataFilmType.find(filmType => filmType.id.toString() === args.id),

            filmDetails: () => data.dataFilmDetail,
            filmDetail: (parent, args) => data.dataFilmDetail.find(filmDetail => filmDetail.id.toString() === args.id),

            seasons: () => data.dataSeason,
            season: (parent, args) => data.dataSeason.find(season => season.id.toString() === args.id),

            episodes: () =>  data.dataEpisode,
            episode: (parent, args) => data.dataEpisode.find(episode => episode.id.toString() === args.id)
    },

    Film: {
        genre: (parent, args) => data.dataGenre.filter(item => parent.genre.includes(item.id)),
        filmType: (parent, args) => data.dataFilmType.find(item => item.id === parent.filmType),
        filmDetail: (parent, args) => data.dataFilmDetail.find(item => item.id === parent.id)
    },

    Genre: {
        films: (parent, args) => data.dataFilms.filter(item => item.genre.includes(parent.id))
    },

    FilmType: {
        films: (parent, args) => data.dataFilms.filter(item => item.filmType === parent.id)
    },

    FilmDetail: {
        seasons: (parent, args) => data.dataSeason.filter(item => parent.seasons.includes(item.id)),
        episode: (parent, args) => data.dataEpisode.find(item => item.id === parent.episode)
    }
};

export default resolvers