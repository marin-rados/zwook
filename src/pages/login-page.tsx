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
import googleIconLightMode from "../assets/icons/login/login-light-mode/google-lightMode.svg";
import { useState } from "react";
import userIcon from "../assets/icons/login/user.svg";

const LoginPage = () => {
  const { lightMode, setLightMode } = useColorModeStore();
  const { setIsLogged } = useLoginStore();
  const [register, setRegister] = useState<boolean>(false);

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
            {register ? (
              <div className={register ? "" : "hidden"}>
                <h4
                  className={`welcome__title ${
                    lightMode ? "welcome-title-light" : ""
                  }`}
                >
                  Register a new account
                </h4>
                <p
                  className={`welcome__message ${
                    lightMode ? "welcome-message-light" : ""
                  }`}
                >
                  Already have an account?
                  <span
                    onClick={() => setRegister(false)}
                    className={`welcome__message__signup ${
                      lightMode ? "welcome-message-light__signup" : ""
                    }`}
                  >
                    Login
                  </span>
                </p>
              </div>
            ) : (
              <div className={register ? "hidden" : ""}>
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
                  Don't have an account yet?
                  <span
                    onClick={() => setRegister(true)}
                    className={`welcome__message__signup ${
                      lightMode ? "welcome-message-light__signup" : ""
                    }`}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            )}
          </div>

          {register ? (
            <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
              <img src={userIcon} alt="User Icon" className="inputs__img" />
              <input
                type="text"
                placeholder="User Name"
                className="inputs__input"
              />
            </div>
          ) : (
            ""
          )}

          <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
            <img src={emailIcon} alt="Email Icon" className="inputs__img" />
            <input
              type="email"
              placeholder="Email Adress"
              className="inputs__input"
            />
          </div>
          {register ? (
            <>
              <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
                <img
                  src={lockIcon}
                  alt="Password Lock Icon"
                  className="inputs__img"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="inputs__input"
                />
              </div>
              <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
                <img
                  src={lockIcon}
                  alt="Password Lock Icon"
                  className="inputs__img"
                />
                <input
                  type="password"
                  placeholder="Repeat Password"
                  className="inputs__input"
                />
              </div>
            </>
          ) : (
            <div className={`inputs ${lightMode ? "inputs-light" : ""}`}>
              <img
                src={lockIcon}
                alt="Password Lock Icon"
                className="inputs__img"
              />
              <input
                type="password"
                placeholder="Password"
                className="inputs__input"
              />
            </div>
          )}

          <button onClick={() => setIsLogged(true)} className="login__button">
            {register ? "Register" : "Login"}
          </button>
          <div className="login-or">
            <hr className="login-or__hr" />
            <p className="login-or__text">or</p>
            <hr className="login-or__hr" />
          </div>
          <div
            className={`login-authorize ${
              lightMode ? "login-authorize-light" : ""
            }`}
          >
            <img
              src={lightMode ? googleIconLightMode : googleIcon}
              alt="Google Logo Image"
              className="login-authorize__image"
            />
            <button
              className={`login-authorize__button ${
                lightMode ? "login-authorize-light__button" : ""
              }`}
            >
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
