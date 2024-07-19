import rockMusician from "../assets/images/categories-images/rock-musician.jfif";
import volumeHigh from "../assets/icons/music-control/volume-high.svg";
import { playerIconsData } from "../data/data";
import { useColorModeStore } from "../store/store";
import volumeHighLight from "../assets/icons/music-control/light-mode/volume-high-lightMode.svg";

const Player = () => {
  const { lightMode } = useColorModeStore();
  return (
    <div className={`player ${lightMode ? "player-light" : ""}`}>
      <div className="artist">
        <img
          src={rockMusician}
          alt="Image of a artist"
          className={`artist__image ${lightMode ? "artist-image-light" : ""}`}
        />
        <div className="artist__info">
          <p
            className={`artist__info__song ${
              lightMode ? "artist-info-song-light" : ""
            }`}
          >
            Artist Song
          </p>
          <p
            className={`artist__info__name ${
              lightMode ? "artist-info-name-light" : ""
            }`}
          >
            Artist Name
          </p>
        </div>
      </div>
      <div className="controls">
        <div className="controls-buttons">
          {playerIconsData.map((icon, index) => {
            return (
              <img
                key={index}
                src={lightMode ? icon.lightModeImg : icon.img}
                alt="Player control icon"
                className={`controls-buttons__image ${
                  icon.playIcon ? "play" : ""
                }`}
              />
            );
          })}
        </div>
        <div className="controls-length">
          <p
            className={`controls-length__time ${
              lightMode ? "controls-length-time-light" : ""
            }`}
          >
            0:34
          </p>
          <div
            className={`controls-length__progress ${
              lightMode ? "controls-length-progress-light" : ""
            }`}
          >
            <div
              className={`controls-length__progress__current ${
                lightMode ? "controls-length-progress-light__current" : ""
              }`}
            ></div>
          </div>
          <p
            className={`controls-length__time ${
              lightMode ? "controls-length-time-light" : ""
            }`}
          >
            3:57
          </p>
        </div>
      </div>
      <div className="volume">
        <img
          src={lightMode ? volumeHighLight : volumeHigh}
          alt="Volume amount image"
          className="volume__image"
        />
        <div
          className={`volume__loudness ${
            lightMode ? "volume-loudness-light" : ""
          }`}
        >
          <div
            className={`volume__loudness__amount ${
              lightMode ? "volume-loudness-light__amount" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
