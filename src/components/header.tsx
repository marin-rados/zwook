import notifficationsIcon from "../assets/icons/header/alarm-bell-icon.svg";
import activitiesIcon from "../assets/icons/header/graph.svg";
import searchIcon from "../assets/icons/header/search-icon.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import AlbertFlores from "../assets/images/avatars/Albert-Flores.jfif";
import { useColorModeStore } from "../store/store";
import darkModeIcon from "../assets/icons/light-mode/dark.svg";
import lightModeIcon from "../assets/icons/light-mode/light.svg";

const Header = () => {
  const { lightMode, setLightMode } = useColorModeStore();
  return (
    <div className="header">
      <div className="header__search">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="header__search__img"
        />
        <input
          type="text"
          placeholder="Search anything here"
          className="header__search__input"
        />
      </div>

      <div className="account">
        <div onClick={() => setLightMode(!lightMode)} className="toggle-mode">
          <img
            src={lightMode ? darkModeIcon : lightModeIcon}
            alt="Dark/Light mode icon"
            className="toggle-mode__img"
          />
        </div>
        <img src="" alt="" />
        <img
          src={activitiesIcon}
          alt="Activities icon"
          className="account__action"
        />
        <img
          src={notifficationsIcon}
          alt="Notiffication bell icon"
          className="account__action"
        />
        <div
          className="avatar"
          style={{ backgroundImage: `url(${AlbertFlores})` }}
        >
          <div className="avatar__status"></div>
        </div>
        <div className="user">
          <h4 className="user__name">Albert Flores</h4>
          <p className="user__email">albert@flores.com</p>
        </div>
        <img src={arrowDown} alt="See more icon" className="account__more" />
      </div>
    </div>
  );
};

export default Header;
