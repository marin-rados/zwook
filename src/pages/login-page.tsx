import sitePreview from "../assets/images/login/site-preview.png";
import logo from "../assets/icons/sidebar/logo.svg";
import logoTitle from "../assets/icons/sidebar/logo-title.svg";
import emailIcon from "../assets/icons/login/email.svg";
import googleIcon from "../assets/icons/login/google.svg";
import lockIcon from "../assets/icons/login/lock.svg";
import { useColorModeStore, useLoginStore } from "../store/store";
import sitePreviewLight from "../assets/images/login/site-preview-lightMode.png";
import darkIcon from "../assets/icons/light-mode/dark.svg";
import lightIcon from "../assets/icons/light-mode/light.svg";
import logoTitleLight from "../assets/icons/sidebar/lightMode/logo-title-light.svg";

const LoginPage = () => {
  const { lightMode, setLightMode } = useColorModeStore();
  const { setIsLogged } = useLoginStore();
  return (
    <div className="login-page">
      <div className={`login ${lightMode ? "login-light" : ""}`}>
        <div
          onClick={() => {
            setLightMode(!lightMode);
          }}
          className="login-toggle-mode"
        >
          <img
            src={lightMode ? darkIcon : lightIcon}
            alt="Light/Dark mode icon"
          />
        </div>

        <form className={`login-form ${lightMode ? "login-form-light" : ""}`}>
          <div className="welcome-header">
            <img
              src={logo}
              alt="Zwook Logo Image"
              className="welcome-header__logo"
            />
            <img
              src={lightMode ? logoTitleLight : logoTitle}
              alt="Zwook Title"
              className="welcome-header__title"
            />
          </div>
          <div className="welcome">
            <h4
              className={`welcome__title ${
                lightMode ? "welcome-title-light" : ""
              }`}
            >
              Welcome Back
            </h4>
            <p
              className={`welcome__message ${
                lightMode ? "welcome-message-light" : ""
              }`}
            >
              Don't have an account yet?{" "}
              <span
                className={`welcome__message__signup ${
                  lightMode ? "welcome-message-light__signup" : ""
                }`}
              >
                Sign Up
              </span>
            </p>
          </div>
          <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
            <img src={emailIcon} alt="" className="inputs__img" />
            <input
              type="email"
              placeholder="Email Adress"
              className="inputs__input"
            />
          </div>
          <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
            <img src={lockIcon} alt="" className="inputs__img" />
            <input
              type="password"
              placeholder="Password"
              className="inputs__input"
            />
          </div>
          <button onClick={() => setIsLogged(true)} className="login__button">
            Login
          </button>
          <div className="login-or">
            <hr className="login-or__hr" />
            <p className="login-or__text">or</p>
            <hr className="login-or__hr" />
          </div>
          <div className="login-authorize">
            <img
              src={googleIcon}
              alt="Google Logo Image"
              className="login-authorize__image"
            />
            <button className="login-authorize__button">
              Authorize with Google
            </button>
          </div>
        </form>
      </div>

      <div
        className="page-preview"
        style={{
          backgroundImage: `url(${lightMode ? sitePreviewLight : sitePreview})`,
        }}
      ></div>
    </div>
  );
};

export default LoginPage;
