// type Film {
//     id: ID,
//     name: String,
//     img: String,
//     genre: [Genre],
//     filmType: FilmType,
//     filmDetail: FilmDetail
// }

// type Genre {
//     id: ID,
//     name: String,
//     films: [Film]
// }

// type FilmType {
//     id: ID,
//     name: String,
//     film: [Film]
// }

// type FilmDetail {
//     id: ID,
//     seasons: [Season],
//     episode: Episode
// }

// type Season {
//     id: ID,
//     name: String,
//     episodes: [Episode]
// }

// type Episode {
//     id: ID,
//     name: String,
//     time: String,
//     link_embed: String,
//     link_m3u8: String
// }

const dataFilms = [
    {
        id: 1,
        name: "Amazing Spider Man 1",
        img: "img.com/amazing-spider-man-1",
        genre: [1, 2],
        filmType: 1,
        filmDetail: 1,
    },
    {
        id: 2,
        name: "Iron Man 1",
        img: "img.com/iron-man-1",
        genre: [1, 2],
        filmType: 1,
        filmDetail: 2,
    },
    {
        id: 3,
        name: "Harry Potter 1",
        img: "img.com/harry-pooter-1",
        genre: [2, 4],
        filmType: 1,
        filmDetail: 3,
    },
    {
        id: 4,
        name: "All Of Us Are Dead",
        img: "img.com/all-of-us-are-dead",
        genre: [1, 3],
        filmType: 2,
        filmDetail: 4
    },
    {
        id: 5,
        name: "Kingdom",
        img: "img.com/kingdom",
        genre: [3, 4],
        filmType: 3,
        filmDetail: 5
    }
]


const dataGenre = [
    {
        id: 1,
        name: "Hành Động"
    },
    {
        id: 2,
        name: "Viễn Tưởng"
    },
    {
        id: 3,
        name: "Xác sống"
    },
    {
        id: 4,
        name: "Phiêu lưu"
    }
]

const dataFilmType = [
    {
        id: 1,
        name: "Movie",
    },
    {
        id: 2,
        name: "TV Show"
    },
    {
        id: 3,
        name: "Series TV Show"
    }
]

const dataFilmDetail = [
    {
        id: 1,
        total_seasons: 0,
        seasons: [],
        episode: 1
    },
    {
        id: 2,
        total_seasons: 0,
        seasons: [],
        episode: 2
    },
    {
        id: 3,
        total_seasons: 0,
        seasons: [],
        episode: 3
    },
    {
        id: 4,
        total_seasons: 1,
        seasons: [1],
        episode: 0
    },
    {
        id: 5,
        total_seasons: 2,
        seasons: [2, 3],
        episode: 0
    }
]

const dataSeason = [
    {
        id: 1,
        name: "Season 1 - AOUAD",
        total_episodes: 2,
        episodes: [4, 5]
    },
    {
        id: 2,
        name: "Season 1 - Kingdom",
        total_episodes: 2,
        episodes: [6, 7]
    },
    {
        id: 3,
        name: "Season 2 - Kingdom",
        total_episodes: 3,
        episodes: [8, 9, 10]
    }
]

const dataEpisode = [
    {
        id: 0,
        name: "Null",
        time: "0",
        link_embed: "datademo.com/amaing-spider-man-1",
        link_m3u8: "datademo.com/amaing-spider-man-1.m3u8",
    },
    {
        id: 1,
        name: "Full - ASM1",
        time: "2h19m",
        link_embed: "datademo.com/amaing-spider-man-1",
        link_m3u8: "datademo.com/amaing-spider-man-1.m3u8",
    },
    {
        id: 2,
        name: "Full - IM1",
        time: "1h45m",
        link_embed: "datademo.com/iron-man-1",
        link_m3u8: "datademo.com/iron-man-1.m3u8",
    },
    {
        id: 3,
        name: "Full - HP1",
        time: "2h00m",
        link_embed: "datademo.com/harry-potter-1",
        link_m3u8: "datademo.com/harry-potter-1.m3u8",
    },
    {
        id: 4,
        name: "E1 - AOUAD",
        time: "30m",
        link_embed: "datademo.com/all-of-us-are-dead-s1-e1",
        link_m3u8: "datademo.com/all-of-us-are-dead-s1-e1.m3u8",
    },
        {
        id: 5,
        name: "E2 - AOUAD",
        time: "32m",
        link_embed: "datademo.com/all-of-us-are-dead-s1-e2",
        link_m3u8: "datademo.com/all-of-us-are-dead-s1-e2.m3u8",
    },
    {
        id: 6,
        name: "E1 - Kingdom",
        time: "55m",
        link_embed: "datademo.com/kingdom-s1-e1",
        link_m3u8: "datademo.com/kingdom-s1-e1.m3u8",
    },
    {
        id: 7,
        name: "E2 - Kingdom",
        time: "50m",
        link_embed: "datademo.com/kingdom-s1-e2",
        link_m3u8: "datademo.com/kingdom-s1-e2.m3u8",
    },
    {
        id: 8,
        name: "E1 - Kingdom",
        time: "47m",
        link_embed: "datademo.com/kingdom-s2-e1",
        link_m3u8: "datademo.com/kingdom-s2-e1.m3u8",
    },
    {
        id: 9,
        name: "E2 - Kingdom",
        time: "57m",
        link_embed: "datademo.com/kingdom-s2-e2",
        link_m3u8: "datademo.com/kingdom-s2-e2.m3u8",
    },
    {
        id: 10,
        name: "E3 - Kingdom",
        time: "1h3m",
        link_embed: "datademo.com/kingdom-s2-e3",
        link_m3u8: "datademo.com/kingdom-s2-e3.m3u8",
    }
]
export default {
    dataFilms,
    dataGenre,
    dataFilmType,
    dataFilmDetail,
    dataSeason,
    dataEpisode
};