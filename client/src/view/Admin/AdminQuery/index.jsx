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
};
export default adminQuery;