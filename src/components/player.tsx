import rockMusician from "../assets/images/categories-images/rock-musician.jfif";
import volumeHigh from "../assets/icons/music-control/volume-high.svg";
import { playerIconsData } from "../data/data";

const Player = () => {
  return (
    <div className="player">
      <div className="artist">
        <img
          src={rockMusician}
          alt="Image of a artist"
          className="artist__image"
        />
        <div className="artist__info">
          <p className="artist__info__song">Artist Song</p>
          <p className="artist__info__name">Artist Name</p>
        </div>
      </div>
      <div className="controls">
        <div className="controls-buttons">
          {playerIconsData.map((icon, index) => {
            return (
              <img
                key={index}
                src={icon.img}
                alt="Player control icon"
                className={`controls-buttons__image ${
                  icon.playIcon ? "play" : ""
                }`}
              />
            );
          })}
        </div>
        <div className="controls-length">
          <p className="controls-length__time">0:34</p>
          <div className="controls-length__progress">
            <div className="controls-length__progress__current"></div>
          </div>
          <p className="controls-length__time">3:57</p>
        </div>
      </div>
      <div className="volume">
        <img
          src={volumeHigh}
          alt="Volume amount image"
          className="volume__image"
        />
        <div className="volume__loudness">
          <div className="volume__loudness__amount"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
