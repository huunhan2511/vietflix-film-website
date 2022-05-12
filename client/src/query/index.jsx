import { gql } from "@apollo/client";

const Query={
    qGetAllFilm: gql`
    query qGetAllFilm {
        films {
          id
          name
          img
          description
          slug
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
          img
          filmType {
            id
            name
          }
        }
      }
    `,
    qGetFilmQuantity: gql`
    query qGetFilmQuantity($quantity: Int){
      films(quantity: $quantity){
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
    qSearhFilm : gql`
      query qSearchFilm($search: String) {
        films(search: $search) {
          id
          name
          slug
          img
          description
        }
      }
    `
}
export default Query