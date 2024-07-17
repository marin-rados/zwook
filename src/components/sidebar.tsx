import { sidebarData } from "../data/data";
import logo from "../assets/icons/sidebar/logo.svg";
import logoTitle from "../assets/icons/sidebar/logo-title.svg";
import star from "../assets/icons/sidebar/star-circle.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div onClick={() => navigate("/")} className="sidebar__logo">
        <img src={logo} alt="Zwook Logo Image" className="sidebar__logo__img" />
        <img
          src={logoTitle}
          alt="Zwook Title"
          className="sidebar__logo__title"
        />
      </div>

      <nav className="navigation">
        {sidebarData.map((navigation) => {
          return (
            <div
              onClick={() => navigate(`${navigation.href}`)}
              key={navigation.id}
              className="navigation__items"
            >
              <div className="navigation__items__main">
                <img
                  className="navigation__items__main__icon"
                  src={navigation.iconDark}
                  alt="icon"
                />
                <p className="navigation__items__main__label">
                  {navigation.name}
                </p>
              </div>
              {navigation.notiffication && (
                <>
                  <div className="navigation__items__optional">
                    <p className="navigation__items__optional__text">
                      {navigation.notifficationText}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </nav>

      <div className="premium">
        <div className="premium__update">
          <div className="premium__update__star">
            <img src={star} alt="Icon of a circle with a star in it" />
          </div>
          <p className="premium__update__title">Update Premium</p>
        </div>
        <div className="premium__description">
          <p className="premium__description__text">
            Your premium account is coming to an end. Please update your credit
            card information.
          </p>
        </div>
        <div className="premium__progress">
          <div className="premium__progress__amount"></div>
        </div>
        <div className="premium__options">
          <p className="premium__options__dismiss">Dismiss</p>
          <p className="premium__options__upgrade">Upgrade Plan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
