import data from '../dummyData/data.js';

const resolver = {
  Query: {
    hello: () => "hello",

    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms(args.quantity),
    film: async (parent, args, context) => await context.mongoDataMethods.getFilmById(args.id),

    genres:async (parent, args, context) => await context.mongoDataMethods.getAllGenres(),
    genre: async (parent, args, context) => await context.mongoDataMethods.getGenreById(args.id),

    filmTypes: async (parent, args, context) => await context.mongoDataMethods.getAllFilmTypes(),
    filmType: async (parent, args, context) => await context.mongoDataMethods.getFilmTypeById(args.id),

    filmDetails: async (parent, args, context) => await context.mongoDataMethods.getAllFilmDetails(),
    filmDetail: async (parent, args, context) => await context.mongoDataMethods.getFilmDetailById(args.id),

    seasons: async (parent, args, context) => await context.mongoDataMethods.getAllSeasons(),
    season: async (parent, args, context) => await context.mongoDataMethods.getSeasonById(args.id),

    episodes: async (parent,args, context) => await context.mongoDataMethods.getAllEpisodes(),
    episode: async (parent, args, context) => await context.mongoDataMethods.getEpisodeById(args.id),
  },

  Film: {
    genres: async (parent, args, context) => await context.mongoDataMethods.getAllGenres({_id: {$in: parent.genres}}),
    filmType: async (parent, args, context) => await context.mongoDataMethods.getFilmTypeById(parent.filmType),
    filmDetail: async (parent, args, context) => await context.mongoDataMethods.getFilmDetailById(parent.filmDetail),
  },

  Genre: {
    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms({genres: {$in: parent.id}})
  },

  FilmType: {
    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms({filmType: parent.id})
  },

  FilmDetail: {
    seasons: async (parent, args, context) => await context.mongoDataMethods.getAllSeasons({_id: {$in: parent.seasons}}),
    episode: async (parent, args, context) => await context.mongoDataMethods.getEpisodeById(parent.episode),
  },

  Season: {
    episodes: async (parent, args, context) =>await context.mongoDataMethods.getAllEpisodes({_id: {$in: parent.episodes}}),
  },

  Mutation: {
    createFilm: async (parent, args, context) => await context.mongoDataMethods.createFilm(args),
    createGenre: async (parent, args, context) => await context.mongoDataMethods.createGenre(args),
    createFilmType: async (parent, args, context) => await context.mongoDataMethods.createFilmType(args),
    createFilmDetail: async (parent, args, context) => await context.mongoDataMethods.createFilmDetail(args),
    createSeason: async (parent, args, context) => await context.mongoDataMethods.createSeason(args),
    createEpisode: async (parent, args, context) => await context.mongoDataMethods.createEpisode(args),

    updateFilm: async (parent, args, context) => await context.mongoDataMethods.updateFilm(args),
    updateGenre: async (parent, args, context) => await context.mongoDataMethods.updateGenre(args),
    updateFilmType: async (parent, args, context) => await context.mongoDataMethods.updateFilmType(args),
    updateFilmDetail: async (parent, args, context) => await context.mongoDataMethods.updateFilmDetail(args),
    updateSeason: async (parent, args, context) => await context.mongoDataMethods.updateSeason(args),
    updateEpisode: async (parent, args, context) => await context.mongoDataMethods.updateEpisode(args),
    updateEpisodes: async (parent, args, context) => await context.mongoDataMethods.updateEpisodes(args)}
}
    

export default resolver;