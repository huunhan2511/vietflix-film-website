import { gql } from "@apollo/client";
const mutations = {
    createEpisode: gql`
        mutation CreateEpisode($input: EpisodeInput) {
            createEpisode(input: $input) {
                id
            }
        }
    `,
    createFilmDetail: gql`
    ,
        mutation CreateFilmDetail($input: FilmDetailInput){
            createFilmDetail(input: $input){
                id
            }
        }
    `,
    createFilm: gql`
    ,
        mutation CreateFilm($input: FilmInput){
            createFilm(input: $input){
                id
            }
        }
    `,
    updateEpisode: gql`
        mutation updateEpisode($input: EpisodeInput) {
            updateEpisode(input: $input) {
                id
            }
        }
    `,
    updateFilmDetail: gql`
        mutation updateFilmDetail($input: FilmDetailInput){
            updateFilmDetail(input: $input){
                id
            }
        }
    `,
    updateFilm: gql`
        mutation UpdateFilm($input: FilmInput) {
            updateFilm(input: $input) {
                id
            }
        }
    `,
    deleteFilm: gql`
        mutation DeleteFilm ($input: String) {
            deleteFilm(id: $input) {
                filmDetail {
                    id
                }
            }
        }
    `,
    deleteFilmDetail: gql`
        mutation DeleteFilmDetail($input: String) {
            deleteFilmDetail(id: $input) {
                episode {
                    id
                }
            }
        }
    `,
    deleteEpisode: gql`
        mutation DeleteEpisode($input: String) {
            deleteEpisode(id: $input) {
                id
            }
        }
    `
}
export default mutations;