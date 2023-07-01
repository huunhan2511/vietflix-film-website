import { gql } from "@apollo/client";
const mutations = {
    createEpíode: gql`
        mutation CreateEpisode($input: EpisodeInput) {
            createEpisode(input: $input) {
            link_embed
            link_m3u8
            name
            time
            }
        }
    `,
}
export default mutations;