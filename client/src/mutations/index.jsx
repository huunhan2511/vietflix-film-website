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
    `
}
export default mutations;