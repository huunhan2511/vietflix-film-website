import data from '../dummyData/data.js';

const resolver = {
  Query: {
    hello: () => "hello",

    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms(),
    film: async (parent, args, context) => await context.mongoDataMethods.getFilmTypeById(args.id),

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
    genre: async (parent, args, context) => await context.mongoDataMethods.getAllGenres({id: {$all: parent.genre}}),
    filmType: async (parent, args, context) => await context.mongoDataMethods.getFilmTypeById(parent.filmType),
    filmDetail: async (parent, args, context) => await context.mongoDataMethods.getFilmDetailById(parent.filmDetail),
  },

  Genre: {
    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms({genre: {$all: parent.id}})
  },

  FilmType: {
    films: async (parent, args, context) => await context.mongoDataMethods.getAllFilms({filmType: parent.id})
  },

  FilmDetail: {
    seasons: async (parent, args, context) => await context.mongoDataMethods.getAllSeasons({id: {$all: parent.seasons}}),
    episode: async (parent, args, context) => await context.mongoDataMethods.getEpisodeById(parent.episode),
  },

  Season: {
    episodes: async (parent, args, context) => await context.mongoDataMethods.getAllEpisodes({id: {$all: parent.episodes}}),
  },

  Mutation: {
    createFilm: async (parent, args, context) => await context.mongoDataMethods.createFilm(args),
    createGenre: async (parent, args, context) => await context.mongoDataMethods.createGenre(args),
    createFilmType: async (parent, args, context) => await context.mongoDataMethods.createFilmType(args),
    createFilmDetail: async (parent, args, context) => await context.mongoDataMethods.createFilmDetail(args),
    createSeason: async (parent, args, context) => await context.mongoDataMethods.createSeason(args),
    createEpisode: async (parent, args, context) => await context.mongoDataMethods.createEpisode(args),
  }
}
    

export default resolver;