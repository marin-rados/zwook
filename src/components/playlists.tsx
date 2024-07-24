import { useNavigate } from "react-router-dom";
import arrowCornerRight from "../assets/icons/playlists/arrow-corner-right.svg";
import { playlistPageData } from "../data/data";

const Playlists = () => {
  const navigate = useNavigate();
  const goTo = (playlistId: string) => {
    navigate(playlistId);
  };

  return (
    <section className="playlists">
      {playlistPageData.map((playlist) => {
        return (
          <article
            key={playlist.id}
            onClick={() => goTo(`playlist/${playlist.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                goTo(`playlist/${playlist.id}`);
              }
            }}
            style={{ backgroundImage: `url(${playlist.playlistImg})` }}
            className="playlists__playlist"
            aria-label={`Go to ${playlist.name} playlist`}
          >
            <div className="playlist-info">
              <img
                src={arrowCornerRight}
                alt="Arrow pointing to the top right"
                className="playlist-info__icon"
              />
              <h2 className="playlist-info__title">{playlist.name}</h2>
              <p className="playlist-info__description">
                {`New release "Impressions" coming ${playlist.date}`}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Playlists;
