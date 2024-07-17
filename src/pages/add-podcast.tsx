import uploadImg from "../assets/icons/add-podcast/upload-icon.svg";

const AddPodcast = () => {
  return (
    <div className="add-podcast">
      <div className="add-podcast-header">
        <h1 className="add-podcast-header__title">Create New Podcast</h1>
        <div className="add-podcast-header__controls">
          <button className="add-podcast-header__controls__button">
            Cancel
          </button>
          <button className="add-podcast-header__controls__button save">
            Save
          </button>
        </div>
      </div>

      <div className="add-podcast-form">
        <form className="add-podcast-form__inputs form">
          <div className="form-input">
            <label className="form-input__label">Title</label>
            <input
              className="form-input__input-field"
              type="text"
              id="title"
              name="title"
              placeholder="Enter station title"
            />
          </div>
          <div className="form-input">
            <label className="form-input__label">Description link</label>
            <input
              className="form-input__input-field"
              type="url"
              id="description-link"
              name="description-link"
              placeholder="Enter website URL"
            />
          </div>
          <div className="form-input">
            <label className="form-input__label">Description</label>
            <textarea
              className="form-input__input-field"
              id="description"
              name="description"
              placeholder="Enter station description"
            ></textarea>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="status" className="checkbox__box" />
            <label className="checkbox__label">Status</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="premium" className="checkbox__box" />
            <label className="checkbox__label">Premium</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" name="default" className="checkbox__box" />
            <label className="checkbox__label">Make Default</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="visible" className="checkbox__box" />
            <label className="checkbox__label">Visible on the Portal</label>
          </div>
        </form>

        <form className="add-podcast-form__upload form">
          <div className="upload-field">
            <img
              src={uploadImg}
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
