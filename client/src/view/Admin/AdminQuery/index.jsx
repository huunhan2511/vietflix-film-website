import { gql } from "@apollo/client";

const adminQuery = {
  qGetAllFilm: gql`
    query qGetAllFilm {
      films {
        id
        name
        img
        description
        genres {
          name
        }
        filmType {
          name
        }
      }
    }
  `,
  qGetDetailFilm: gql`
    query qGetFilm($filmId: ID) {
        film(id: $filmId) {
          id
          name
          img
          description
          slug
          filmType {
            id
            name
          }
          genres {
            id
            name
          }
          filmDetail {
            id
            seasons {
              id
              name
              total_episodes
              episodes {
                id
                name
                time
                link_embed
                link_m3u8
              }
            }
          }
        }
      }
    `,
  qGetFilmsByFilmType: gql`
    query qGetFilmsByFilmType($filmTypeId: ID) {
      filmType(id: $filmTypeId) {
        films {
          id
          name
          img
          description
          genres {
            name
          }
          filmType {
            name
          }
        }
      }
    }
  `,
  qGetAllCategories: gql`
  query qGetAllCategories {
    genres {
      id
      name
    }
  }`,
  mAddCategory: gql`
  mutation mAddCategory($input: GenreInput) {
    createGenre(input: $input) {
      id
      name
    }
  }
  `,
  mLogin: gql`
  mutation mLogin($input: loginAdmin) {
    loginAdmin(input: $input) {
      token
    }
  }
  `,
};
export default adminQuery;