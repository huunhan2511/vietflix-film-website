import { gql } from "@apollo/client";
const mutations = {
    createEpíode: gql`
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
    `
}
export default mutations;