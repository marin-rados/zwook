import { playlistPageData, playlistSongsData } from "../data/data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlaylistDataType } from "../types/global";
import { useColorModeStore } from "../store/store";

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const [data, setData] = useState<PlaylistDataType>();
  const { lightMode } = useColorModeStore();

  const getPlaylistInfo = () => {
    const playlist = playlistPageData.find((playlist) => {
      return playlist.id === playlistId;
    });
    setData(playlist);
  };

  useEffect(() => {
    getPlaylistInfo();
  }, []);

  return (
    <main className={`playlist-page ${lightMode ? "playlist-page-light" : ""}`}>
      {data ? (
        <header
          className="playlist-page-header"
          style={{ backgroundImage: `url(${data.playlistImg})` }}
        >
          <img
            src={data.featuredImg}
            alt={`Artist featured in ${data.name} playlist`}
            className="playlist-page-header__image"
          />
          <div className="playlist-page-header__description">
            <p className="playlist-page-header__description__info">Playlist</p>
            <h1 className="playlist-page-header__description__title">
              {data.name}
            </h1>
            <p className="playlist-page-header__description__info">
              {`New release "Impressions" coming ${data.date}`}
            </p>
          </div>
        </header>
      ) : (
        <p role="alert">Error loading playlist</p>
      )}

      <table className="tracks">
        <thead
          className={`tracks__header ${lightMode ? "tracks-header-light" : ""}`}
        >
          <tr className="tracks__header__tags">
            <th
              className={`tracks__header__tags__tag ${
                lightMode ? "tracks-header-tag-light" : ""
              }`}
            >
              #
            </th>
            <th
              className={`tracks__header__tags__tag ${
                lightMode ? "tracks-header-tag-light" : ""
              }`}
            >
              Title
            </th>
            <th
              className={`tracks__header__tags__tag ${
                lightMode ? "tracks-header-tag-light" : ""
              }`}
            >
              Album
            </th>
            <th
              className={`tracks__header__tags__tag ${
                lightMode ? "tracks-header-tag-light" : ""
              }`}
            >
              Date Added
            </th>
            <th
              className={`tracks__header__tags__tag ${
                lightMode ? "tracks-header-tag-light" : ""
              }`}
            >
              Song Time
            </th>
          </tr>
        </thead>
        <tbody>
          {playlistSongsData.map((song, index) => {
            return (
              <tr
                key={song.artistName}
                className={`track ${lightMode ? "track-light" : ""}`}
              >
                <td
                  className={`track__info ${
                    lightMode ? "track-info-light" : ""
                  }`}
                >
                  {index + 1}
                </td>
                <td>
                  <div className="track-artist">
                    <img
                      className={`track-artist__image ${
                        lightMode ? "track-artist-image-light" : ""
                      }`}
                      src={song.songImg}
                      alt={`Image of a ${song.artistName}`}
                    />
                    <div>
                      <div
                        className={`track-artist__title ${
                          lightMode ? "track-artist-title-light" : ""
                        }`}
                      >
                        {song.songName}
                      </div>
                      <div
                        className={`track-artist__name ${
                          lightMode ? "track-artist-name-light" : ""
                        }`}
                      >
                        {song.artistName}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  className={`track__info ${
                    lightMode ? "track-info-light" : ""
                  }`}
                >
                  {song.album}
                </td>
                <td
                  className={`track__info ${
                    lightMode ? "track-info-light" : ""
                  }`}
                >
                  {song.dateAdded}
                </td>
                <td
                  className={`track__info ${
                    lightMode ? "track-info-light" : ""
                  }`}
                >
                  {song.songDuration}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default PlaylistPage;
