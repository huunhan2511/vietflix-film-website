import React from "react";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import adminQuery from "../../AdminQuery";

export default function Seasontable(){
    const cardFilm = useQuery(adminQuery.qGetDetailFilm);
    const seasons = [
      {
        name: "Season 1 - Kingdom",
        total_episodes: 2,
        episode: [
          {
            name: "S1E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S1E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
        ],
      },
      {
        name: "Season 2 - Kingdom",
        total_episodes: 3,
        episode: [
          {
            name: "S2E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S2E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
        ],
      },
    ];
    const expandedRowRender = () => {
        const columnsEpisode = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Time",
            dataIndex: "time",
            key: "time",
          },
          {
            title: "Embed",
            dataIndex: "link_embed",
            key: "link_embed",
          },
          {
            title: "M3U8",
            dataIndex: "link_m3u8",
            key: "link_m3u8",
          },
          {
            title: "Action",
            dataIndex: "operation",
            key: "operation",
            render: () => (
                  <a>Xóa</a>
            ),
          },
        ];
        const episodes = [
          {
            name: "S1E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S1E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
          {
            name: "S2E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S2E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
        ];
    
        return <Table columns={columnsEpisode} dataSource={episodes} pagination={false} />;
      };
      const expandedRowRender2 = () => {
        const columnsEpisode = [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Time",
            dataIndex: "time",
            key: "time",
          },
          {
            title: "Embed",
            dataIndex: "link_embed",
            key: "link_embed",
          },
          {
            title: "M3U8",
            dataIndex: "link_m3u8",
            key: "link_m3u8",
          },
          {
            title: "Action",
            dataIndex: "operation",
            key: "operation",
            render: () => (
                  <a>Xóa</a>
            ),
          },
        ];
        const episodes = [
          {
            name: "S1E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S1E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
          {
            name: "S2E1 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/fedf67d6f3d7341c1c1e8a54774987d3",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3067_775eba02/index.m3u8",
          },
          {
            name: "S2E2 - Kingdom",
            time: "56m",
            link_embed:
              "https://vie.haiphim.com/share/f5496252609c43eb8a3d147ab9b9c006",
            link_m3u8:
              "https://vie.haiphim.com/20220329/3068_7fd56273/index.m3u8",
          },
        ];
    
        return <Table columns={columnsEpisode} dataSource={seasons[0].episode} pagination={false} />;
      };
    
      const columnsSeasons = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Total Episodes",
          dataIndex: "total_episodes",
          key: "total_episodes",
        },
        {
          title: "Action",
          key: "operation",
          render: () => <a>Xóa</a>,
        },
      ];
      const data = [
        {
          key: 1,
          name: "Season 1 - Kingdom",
          total_episodes: 2,
        },
        {
          key:2,
          name: "Season 2 - Kingdom",
          total_episodes: 3,
        },
      ];
    
      return (
        <Table
          className="components-table-demo-nested"
          columns={columnsSeasons}
          expandable={{
            expandedRowRender,
          }}
          dataSource={data}
        />
      );
}
