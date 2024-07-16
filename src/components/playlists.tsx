import arrowCornerRight from "../assets/icons/playlists/arrow-corner-right.svg";
import midnightMelodies from "../assets/images/abstract-images/midnight.jfif";
import virgos from "../assets/images/abstract-images/virgos.jfif";

const Playlists = () => {
  return (
    <div className="playlists">
      <a href="/playlist">
        <div
          style={{ backgroundImage: `url(${midnightMelodies})` }}
          className="playlists__playlist"
        >
          <div className="playlist-info">
            <img
              src={arrowCornerRight}
              alt="Arrow Icon"
              className="playlist-info__icon"
            />
            <p className="playlist-info__title">Midnight Melodies</p>
            <p className="playlist-info__description">
              New release "Impressions" coming June,16
            </p>
          </div>
        </div>
      </a>
      <div
        style={{ backgroundImage: `url(${virgos})` }}
        className="playlists__playlist"
      >
        <div className="playlist-info">
          <img
            src={arrowCornerRight}
            alt="Arrow Icon"
            className="playlist-info__icon"
          />
          <p className="playlist-info__title">Virgos</p>
          <p className="playlist-info__description">
            New release "Impressions" coming July,29
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
