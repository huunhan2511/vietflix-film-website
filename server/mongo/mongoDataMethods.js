import Film from '../models/film.js'
import Genre from '../models/genre.js'
import FilmType from '../models/filmType.js'
import FilmDetail from '../models/filmDetail.js'
import Season from '../models/season.js'
import Episode from '../models/episode.js'
import Admin from '../models/admin.js'
import { ApolloError } from "apollo-server-express"
import bcrypt from 'bcrypt'
import token from '../jwt/jwtToken.js'
import dotenv from 'dotenv'
dotenv.config();

const mongoDataMethods = { 
    getAllFilms: {
		where: async (conditions = null) => conditions === null ? await Film.find().sort('-createdAt') : await Film.find(conditions).sort('-createdAt'),
		films: async (conditions = null) => {
			return conditions === null ? await Film.find().sort('-createdAt') :
				conditions.quantity ? await Film.find().sort('-createdAt').limit(conditions.quantity) :
			await Film.find({slug: new RegExp(conditions.search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").split(" ").join("-"), 'i')})
			.sort('-createdAt')
		}
	},
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
		newFilm.slug = newFilm.name.toLowerCase().replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g,"").split(" ").join("-")
		newFilm.slug = newFilm.slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
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

	createAdmin: async args => {
		const newAdmin = new Admin(args.input)
		if(await Admin.findOne({username: newAdmin.username}))
			throw new ApolloError('Username '+ newAdmin.username +' đã tồn tại, vui lòng sử dụng username khác', 'USERNAME ALREADY EXISTS')
			const BCRYPT_SALT = process.env.BCRYPT_SALT || 10
		newAdmin.password = bcrypt.hashSync(newAdmin.password, Number(BCRYPT_SALT))
		return await newAdmin.save()
	},

	loginAdmin: async args => {
		const loginInput = args.input
		let isExistAdmin = await Admin.findOne({username: loginInput.username})
		if(isExistAdmin && bcrypt.compareSync(loginInput.password, isExistAdmin.password)) {
			return {
				admin: isExistAdmin,
				token: token.createToken(isExistAdmin)
			}
		}
		else {
			throw new ApolloError('Username và password không trùng khớp', 'USERNAME AND PASSWORD INCORRECT')
		}
	},

	changeAdminPassword: async args => {
		const id = args.input.id
		let newPassword = args.input.newPassword
		let account = await Admin.findById(id)

		const oldPassword = args.input.oldPassword
		let isOldPassword = bcrypt.compareSync(oldPassword, account.password);
		if(!isOldPassword){
			throw new ApolloError('Password không trùng khớp','PASSWORD INCORRECT')
		}
		let compare = bcrypt.compareSync(newPassword, account.password);
		if(compare){
			throw new ApolloError('Password mới không được trùng với password cũ', 'PASSWORD IS SAME WITH OLD PASSWORD')
		}

		let err = account.validateSync()
		if (err) throw new ApolloError(errorMessage(err), 'ERROR')
		const BCRYPT_SALT = process.env.BCRYPT_SALT || 10
		newPassword = bcrypt.hashSync(newPassword, Number(BCRYPT_SALT))
		return await Admin.findOneAndUpdate({ _id: id }, { password: newPassword }, { returnDocument: 'after' })
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

	//Delete
    deleteFilm: async args => {
		return await Film.findOneAndRemove({_id: args.id})
	},

    deleteGenre: async args => {
		return await Genre.findOneAndRemove({_id: args.id})
	},

    deleteFilmType: async args => {
		return await FilmType.findOneAndRemove({_id: args.id})
	},

    deleteFilmDetail: async args => {
		return await FilmDetail.findOneAndRemove({_id: args.id})
	},

    deleteSeason: async args => {
		return await Season.findOneAndRemove({_id: args.id})
	},

    deleteEpisode: async args => {
		return await Episode.findOneAndRemove({_id: args.id})
	},
}

export default mongoDataMethods