import notifficationsIcon from "../assets/icons/header/alarm-bell-icon.svg";
import activitiesIcon from "../assets/icons/header/graph.svg";
import searchIcon from "../assets/icons/header/search-icon.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import AlbertFlores from "../assets/images/avatars/Albert-Flores.jfif";
import { useColorModeStore } from "../store/store";
import darkModeIcon from "../assets/icons/light-mode/dark.svg";
import lightModeIcon from "../assets/icons/light-mode/light.svg";
import arrowDownLight from "../assets/icons/header/lightMode/arrow-down-lightMode.svg";
import graphLight from "../assets/icons/header/lightMode/graph-lightMode.svg";
import notifficationLight from "../assets/icons/header/lightMode/alarm-bell-lightMode.svg";
import searchIconLight from "../assets/icons/header/lightMode/search-icon-light.svg";

const Header = () => {
  const { lightMode, setLightMode } = useColorModeStore();
  return (
    <header className={`header ${lightMode ? "header-light" : ""}`}>
      <div
        className={`header__search ${lightMode ? "header-search-light" : ""}`}
      >
        <img
          src={lightMode ? searchIconLight : searchIcon}
          alt="Search Icon"
          className="header__search__img"
        />
        <input
          type="text"
          placeholder="Search anything here"
          className={`header__search__input ${
            lightMode ? "header-search-light__input" : ""
          }`}
        />
      </div>

      <nav className="account">
        <div
          onClick={() => setLightMode(!lightMode)}
          className={`toggle-mode ${lightMode ? "toggle-mode-light" : ""}`}
          aria-label={
            lightMode ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          <img
            src={lightMode ? darkModeIcon : lightModeIcon}
            alt="Dark/Light mode icon"
            className="toggle-mode__img"
          />
        </div>
        <img
          src={lightMode ? graphLight : activitiesIcon}
          alt="Activities"
          className="account__action"
        />
        <img
          src={lightMode ? notifficationLight : notifficationsIcon}
          alt="Notiffications"
          className="account__action"
        />
        <div
          className={`avatar ${lightMode ? "avatar-light" : ""}`}
          style={{ backgroundImage: `url(${AlbertFlores})` }}
          role="img"
          aria-label="Albert Flores"
        >
          <div
            className={`avatar__status ${
              lightMode ? "avatar-light__status" : ""
            }`}
          ></div>
        </div>
        <div className="user">
          <h4 className={`user__name ${lightMode ? "user-name-light" : ""}`}>
            Albert Flores
          </h4>
          <p className={`user__email ${lightMode ? "user-email-light" : ""}`}>
            albert@flores.com
          </p>
        </div>
        <img
          src={lightMode ? arrowDownLight : arrowDown}
          alt="See more options"
          className="account__more"
          aria-label="See more options"
        />
      </nav>
    </header>
  );
};

export default Header;
