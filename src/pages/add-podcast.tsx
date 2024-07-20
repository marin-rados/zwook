import uploadImg from "../assets/icons/add-podcast/upload-icon.svg";
import { useColorModeStore } from "../store/store";
import uploadImgLightMode from "../assets/icons/add-podcast/add-podcast-light-mode/upload-icon-lightMode.svg";

const AddPodcast = () => {
  const { lightMode } = useColorModeStore();
  return (
    <div className="add-podcast">
      <div className="add-podcast-header">
        <h1
          className={`add-podcast-header__title ${
            lightMode ? "add-podcast-header-title" : ""
          }`}
        >
          Create New Podcast
        </h1>
        <div className="add-podcast-header__controls">
          <button
            className={`add-podcast-header__controls__button ${
              lightMode ? "cancel-light" : ""
            }`}
          >
            Cancel
          </button>
          <button className="add-podcast-header__controls__button save">
            Save
          </button>
        </div>
      </div>

      <div className="add-podcast-form">
        <form
          className={`add-podcast-form__inputs form ${
            lightMode ? "form-light" : ""
          }`}
        >
          <div className="form-input">
            <label
              className={`form-input__label ${
                lightMode ? "form-input-label-light" : ""
              }`}
            >
              Title
            </label>
            <input
              className={`form-input__input-field ${
                lightMode ? "form-input-input-field-light" : ""
              }`}
              type="text"
              id="title"
              name="title"
              placeholder="Enter station title"
            />
          </div>
          <div className="form-input">
            <label
              className={`form-input__label ${
                lightMode ? "form-input-label-light" : ""
              }`}
            >
              Description link
            </label>
            <input
              className={`form-input__input-field ${
                lightMode ? "form-input-input-field-light" : ""
              }`}
              type="url"
              id="description-link"
              name="description-link"
              placeholder="Enter website URL"
            />
          </div>
          <div className="form-input">
            <label
              className={`form-input__label ${
                lightMode ? "form-input-label-light" : ""
              }`}
            >
              Description
            </label>
            <textarea
              className={`form-input__input-field ${
                lightMode ? "form-input-input-field-light" : ""
              }`}
              id="description"
              name="description"
              placeholder="Enter station description"
            ></textarea>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="status" className="checkbox__box" />
            <label
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Status
            </label>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="premium" className="checkbox__box" />
            <label
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Premium
            </label>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="default" className="checkbox__box" />
            <label
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Make Default
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="visible" className="checkbox__box" />
            <label
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Visible on the Portal
            </label>
          </div>
        </form>

        <form
          className={`add-podcast-form__upload form ${
            lightMode ? "form-light" : ""
          }`}
        >
          <div
            className={`upload-field ${lightMode ? "upload-field-light" : ""}`}
          >
            <img
              src={lightMode ? uploadImgLightMode : uploadImg}
              alt="Upload image"
              className="upload-field__img"
            />

            <input
              type="file"
              id="upload-image"
              name="upload-image"
              accept="image/*"
              className="upload-field__input"
            />
          </div>
          <button className="add-podcast-form__upload__button">
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPodcast;
