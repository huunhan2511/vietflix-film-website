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
      films(quantity: $quantity) {
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
    `,
    qGetAllGenre : gql`
      query qGetAllGenre{
        genres{
          id
          name
          films {
            id
            name
            slug
            img
            filmType {
              id
              name
            }
          }
        }
      }
    `,
    qGetGenreId : gql`
      query qGetGenreId($genreId: ID) {
        genre(id: $genreId) {
          id
          name
          films {
            id
            name
            slug
            img
            filmType {
              id
              name
            }
          }
        }
      }
    `
}
export default Query