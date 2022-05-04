import { gql } from "@apollo/client";

const Query={
    qGetAllFilm: gql`
    query qGetAllFilm {
        films {
          id
          name
          img
          genres {
            id
            name
          }
          filmType {
            id
            name
          }
        }
      }
    `,
    qGetFilm: gql`
    query qGetFilm($filmId: ID) {
        film(id: $filmId) {
          id
          name
        }
      }
    `
}
export default Query