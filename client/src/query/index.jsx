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
    `,
    qGetMoive : gql`
    query qGetMoive($filmId: ID) {
      film(id: $filmId) {
        id
        name
        filmDetail {
          id
          episode {
            id
            name
            time
            link_embed
            link_m3u8
          }
        }
      }
    }
    `,
    qGetTvShow : gql`
    query qGetTvShow($filmId: ID) {
      film(id: $filmId) {
        id
        name
        filmDetail {
          id
          seasons {
            id
            name
            episodes {
              name
              id
              time
              link_embed
              link_m3u8
            }
          }
        }
      }
    }
    `,
    qGetSeason :gql`
    query qGetFilm($seasonId: ID) {
      season(id: $seasonId) {
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
    `,
    mLogin: gql`
    mutation mLogin($input: loginAdmin) {
      loginAdmin(input: $input) {
        token
      }
    }
    `,
    qGenre: gql`
    query qGenre {
      genres {
        id
        name
      }
    }
    `,
    qGetDetailFilmEdit: gql`
    query qGetFilm($filmId: ID) {
      film(id: $filmId) {
        description
        filmDetail {
          episode {
            link_embed
            link_m3u8
            time
          }
        }
        genres {
          id
          name
        }
        img
        name
      }
      }
    `,
}
export default Query