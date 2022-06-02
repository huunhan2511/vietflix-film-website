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
  qFilmDetail: gql`
    query FilmDetail($filmDetailId: ID) {
      filmDetail(id: $filmDetailId) {
        total_seasons
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
        episode {
          id
          name
          time
          link_embed
          link_m3u8
        }
      }
    }
  `,
  qSeason: gql`
    query Season($seasonId: ID) {
      season(id: $seasonId) {
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
  qEpisode: gql`
    query Episode($episodeId: ID) {
      episode(id: $episodeId) {
        id
        name
        time
        link_embed
        link_m3u8
      }
    }
  `
};
export default adminQuery;