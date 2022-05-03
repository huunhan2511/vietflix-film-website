import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Film {
        id: ID!,
        name: String,
        img: String,
        genres: [Genre],
        filmType: FilmType,
        filmDetail: FilmDetail
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

    type Query {
        hello: String,

        films: [Film]
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

    input FilmInput {
        name: String,
        img: String,
        genres: [String],
        filmType: String,
        filmDetail: String
    }

    input GenreInput{
        name: String
    }

    input FilmTypeInput{
        name: String
    }

    input FilmDetailInput {
        total_seasons: Int,
        seasons: [String],
        episode: String
    }

    input SeasonInput{
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

    type Mutation{
        createFilm(input:FilmInput): Film,
        createGenre(input:GenreInput): Genre,
        createFilmType(input:FilmTypeInput): FilmType,
        createFilmDetail(input:FilmDetailInput): FilmDetail,
        createSeason(input:SeasonInput): Season,
        createEpisode(input:EpisodeInput): Episode
    }
`;

export default typeDefs