import { gql } from 'apollo-server-express'

const typeDefs = gql`
    directive @isAuth(reason: String = "No longer supported"    ) on FIELD_DEFINITION | OBJECT
    type Film {
        id: ID!
        name: String
        slug: String 
        img: String
        genres: [Genre]
        filmType: FilmType
        filmDetail: FilmDetail
        description: String
    }
    type Genre {
        id: ID,
        name: String,
        films: [Film]
    }

    type FilmType {
        id: ID,
        name: String,
        films: [Film]
    }

    type FilmDetail {
        id: ID,
        total_seasons: Int,
        seasons: [Season],
        episode: Episode
    }

    type Season {
        id: ID,
        name: String,
        total_episodes: Int,
        episodes: [Episode]
    }

    type Episode {
        id: ID,
        name: String,
        time: String,
        link_embed: String,
        link_m3u8: String
    }

    type Admin {
        id: ID,
        name: String,
        username: String,
        password: String,
    }

    type Token {
        admin: Admin,
        token: String,
    }
    type Headers {
        authorization: String
    }
    type Query {
        hello: String @isAuth
        headers: Headers

        films(quantity: Int, search: String): [Film]
        film(id: ID): Film

        genres: [Genre]
        genre(id: ID): Genre

        filmTypes: [FilmType]
        filmType(id: ID): FilmType

        filmDetails: [FilmDetail]
        filmDetail(id: ID): FilmDetail

        seasons: [Season]
        season(id: ID): Season

        episodes: [Episode]
        episode(id: ID): Episode
    }

    input FilmInput{
        id: String,
        name: String,
        img: String,
        genres: [String],
        filmType: String,
        filmDetail: String,
        description: String
    }

    input GenreInput{
        id: String,
        name: String
    }

    input FilmTypeInput{
        id: String,
        name: String
    }

    input FilmDetailInput {
        id: String,
        total_seasons: Int,
        seasons: [String],
        episode: String
    }

    input SeasonInput{
        id: String,
        name: String,
        total_episodes: Int,
        episodes: [String]
    }

    input EpisodeInput{
        id: String,
        name: String,
        time: String,
        link_embed: String,
        link_m3u8: String
    }

    input createAdmin{
        name: String,
        username: String,
        password: String
    }

    input loginAdmin{
        username: String,
        password: String
    }

    input changeAdminPassword{
        id: String,
        oldPassword: String,
        newPassword: String,
    },

    type Mutation{
        createFilm(input:FilmInput): Film, @isAuth
        createGenre(input:GenreInput): Genre, @isAuth
        createFilmType(input:FilmTypeInput): FilmType, @isAuth
        createFilmDetail(input:FilmDetailInput): FilmDetail, @isAuth
        createSeason(input:SeasonInput): Season, @isAuth
        createEpisode(input:EpisodeInput): Episode, @isAuth

        createAdmin(input: createAdmin): Admin,
        loginAdmin(input: loginAdmin): Token,
        changeAdminPassword(input: changeAdminPassword): Admin, @isAuth

        updateFilm(input:FilmInput): Film, @isAuth
        updateGenre(input:GenreInput): Genre, @isAuth
        updateFilmType(input:FilmTypeInput): FilmType, @isAuth
        updateFilmDetail(input:FilmDetailInput): FilmDetail, @isAuth
        updateSeason(input:SeasonInput): Season, @isAuth
        updateEpisode(input:EpisodeInput): Episode, @isAuth
        updateEpisodes(input:[EpisodeInput]): [Episode], @isAuth

        deleteFilm(id:String): Film, @isAuth
        deleteGenre(id:String): Genre, @isAuth
        deleteFilmType(id:String): FilmType, @isAuth
        deleteFilmDetail(id:String): FilmDetail, @isAuth
        deleteSeason(id:String): Season, @isAuth
        deleteEpisode(id:String): Episode, @isAuth
    }
`;

export default typeDefs