import { playlistSongsData } from "../data/data";
import midnight from "../assets/images/abstract-images/midnight.jfif";
import guitarMan from "../assets/images/featured-images/guitar-man.jfif";

const PlaylistPage = () => {
  return (
    <div className="playlist-page">
      <div
        className="playlist-page-header"
        style={{ backgroundImage: `url(${midnight})` }}
      >
        <img
          src={guitarMan}
          alt="Image of an artist"
          className="playlist-page-header__image"
        />
        <div className="playlist-page-header__description">
          <p className="playlist-page-header__description__info">Playlist</p>
          <p className="playlist-page-header__description__title">
            Midnight Melodies
          </p>
          <p className="playlist-page-header__description__info">
            New release "impressions" coming June,16
          </p>
        </div>
      </div>
      <table className="tracks">
        <thead className="tracks__header">
          <tr className="tracks__header__tags">
            <th className="tracks__header__tags__tag">#</th>
            <th className="tracks__header__tags__tag">Title</th>
            <th className="tracks__header__tags__tag">Album</th>
            <th className="tracks__header__tags__tag">Date Added</th>
            <th className="tracks__header__tags__tag">Song Time</th>
          </tr>
        </thead>
        <tbody>
          {playlistSongsData.map((song, index) => {
            return (
              <tr key={song.artistName} className="track">
                <td className="track__info">{index + 1}</td>
                <td>
                  <div className="track-artist">
                    <img
                      className="track-artist__image"
                      src={song.songImg}
                      alt={`Image of a ${song.artistName}`}
                    />
                    <div>
                      <div className="track-artist__title">{song.songName}</div>
                      <div className="track-artist__name">
                        {song.artistName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="track__info">{song.album}</td>
                <td className="track__info">{song.dateAdded}</td>
                <td className="track__info">{song.songDuration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlaylistPage;
