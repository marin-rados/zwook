import { useNavigate } from "react-router-dom";
import arrowCornerRight from "../assets/icons/playlists/arrow-corner-right.svg";
import { playlistPageData } from "../data/data";

const Playlists = () => {
  const navigate = useNavigate();
  const goTo = (playlistId: string) => {
    navigate(playlistId);
  };

  return (
    <div className="playlists">
      {playlistPageData.map((playlist) => {
        return (
          <div
            key={playlist.id}
            onClick={() => goTo(`playlist/${playlist.id}`)}
            style={{ backgroundImage: `url(${playlist.playlistImg})` }}
            className="playlists__playlist"
          >
            <div className="playlist-info">
              <img
                src={arrowCornerRight}
                alt="Arrow Icon"
                className="playlist-info__icon"
              />
              <p className="playlist-info__title">{playlist.name}</p>
              <p className="playlist-info__description">
                {`New release "Impressions" coming ${playlist.date}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;

{
  /* <div className="playlists">
  {playlistPageData.map((playlist) => {
    return (
      <div
        key={playlist.id}
        onClick={() => goTo("/playlist")}
        style={{ backgroundImage: `url(${playlist.playlistImg})` }}
        className="playlists__playlist"
      >
        <div className="playlist-info">
          <img
            src={arrowCornerRight}
            alt="Arrow Icon"
            className="playlist-info__icon"
          />
          <p className="playlist-info__title">{playlist.name}</p>
          <p className="playlist-info__description">
            {`New release "Impressions" coming ${playlist.date}`}
          </p>
        </div>
      </div>
    );
  })}
</div>; */
}
