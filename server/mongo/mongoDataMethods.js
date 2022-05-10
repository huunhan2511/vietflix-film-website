import Film from '../models/film.js'
import Genre from '../models/genre.js'
import FilmType from '../models/filmType.js'
import FilmDetail from '../models/filmDetail.js'
import Season from '../models/season.js'
import Episode from '../models/episode.js'

const mongoDataMethods = { 
    getAllFilms: async (conditions = null) => conditions === null ? await Film.find() : await Film.find(conditions),
    getFilmById: async (id) => await Film.findById(id),

    getAllGenres: async (conditions = null) => conditions === null ? await Genre.find() : await Genre.find(conditions),
    getGenreById: async id => Genre.findById(id),

    getAllFilmTypes: async () => await FilmType.find(),
    getFilmTypeById: async id => await FilmType.findById(id),

    getAllFilmDetails: async () => await FilmDetail.find(),
    getFilmDetailById: async id => await FilmDetail.findById(id),

    getAllSeasons: async (conditions = null) => conditions === null ? await Season.find() : await Season.find(conditions),
    getSeasonById: async id => await Season.findById(id),

    getAllEpisodes: async (conditions = null) => conditions === null ? await Episode.find() : await Episode.find(conditions),
    getEpisodeById: async id => await Episode.findById(id),

    //Create
    createFilm: async args => {
		const newFilm = new Film(args.input)
		return await newFilm.save()
	},

    createGenre: async args => {
		const newGenre = new Genre(args.input)
		return await newGenre.save()
	},

    createFilmType: async args => {
		const newFilmType = new FilmType(args.input)
		return await newFilmType.save()
	},

    createFilmDetail: async args => {
		const newFilmDetail = new FilmDetail(args.input)
		return await newFilmDetail.save()
	},

    createSeason: async args => {
		const newSeason = new Season(args.input)
		return await newSeason.save()
	},

    createEpisode: async args => {
		const newEpisode = new Episode(args.input)
		return await newEpisode.save()
	},
  //Update
    updateFilm: async args => {
		return await Film.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},

    updateGenre: async args => {
		return await Genre.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},

    updateFilmType: async args => {
		return await FilmType.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},

    updateFilmDetail: async args => {
		return await FilmDetail.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},

    updateSeason: async args => {
		return await Season.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},

    updateEpisode: async args => {
		return await Episode.findOneAndUpdate({_id: args.input.id}, args.input, { returnDocument: 'after' })
	},
    updateEpisodes: async args => {
		  return await Episode.insertMany(args.input)
	},
}

export default mongoDataMethods