import uploadImg from "../assets/icons/add-podcast/upload-icon.svg";
import { useColorModeStore } from "../store/store";
import uploadImgLightMode from "../assets/icons/add-podcast/add-podcast-light-mode/upload-icon-lightMode.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

const schema = yup.object().shape({
  premium: yup.boolean().required("Choose Podcast Type"),
  status: yup.boolean().required("Podcast Status is required"),
  visible: yup.boolean().required("Visible is required"),
  title: yup.string().required("Podcast Title is required"),
});

type PodcastsType = {
  id: string;
  premium: boolean;
  status: boolean;
  visible: boolean;
  title: string;
};

type FormValues = Omit<PodcastsType, "id">;

type Props = {
  isEdit?: boolean;
};

const AddPodcast = ({ isEdit }: Props) => {
  const { lightMode } = useColorModeStore();
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const [data, setData] = useState<PodcastsType>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <main className="add-podcast">
      <header className="add-podcast-header">
        <h1
          className={`add-podcast-header__title ${
            lightMode ? "add-podcast-header-title" : ""
          }`}
        >
          {isEdit ? "Edit Podcast" : "Create New Podcast"}
        </h1>
        <div className="add-podcast-header__controls">
          <button
            type="button"
            className={`add-podcast-header__controls__button ${
              lightMode ? "cancel-light" : ""
            }`}
          >
            Cancel
          </button>
          <button
            type="button"
            className="add-podcast-header__controls__button save"
          >
            Save
          </button>
        </div>
      </header>

      <section className="add-podcast-form">
        <form
          className={`add-podcast-form__inputs form ${
            lightMode ? "form-light" : ""
          }`}
        >
          <div className="form-input">
            <label
              htmlFor="title"
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
              id="title"
              name="title"
              type="text"
              placeholder="Enter station title"
            />
          </div>
          <div className="form-input">
            <label
              htmlFor="description-link"
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
              id="description-link"
              name="description-link"
              type="url"
              placeholder="Enter website URL"
            />
          </div>
          <div className="form-input">
            <label
              htmlFor="description"
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
            <input
              id="status"
              type="checkbox"
              name="status"
              className="checkbox__box"
            />
            <label
              htmlFor="status"
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Status
            </label>
          </div>

          <div className="checkbox">
            <input
              id="premium"
              type="checkbox"
              name="premium"
              className="checkbox__box"
            />
            <label
              htmlFor="premium"
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Premium
            </label>
          </div>

          <div className="checkbox">
            <input
              id="default"
              type="checkbox"
              name="default"
              className="checkbox__box"
            />
            <label
              htmlFor="default"
              className={`checkbox__label ${
                lightMode ? "checkbox-label-title" : ""
              }`}
            >
              Make Default
            </label>
          </div>
          <div className="checkbox">
            <input
              id="visible"
              type="checkbox"
              name="visible"
              className="checkbox__box"
            />
            <label
              htmlFor="visible"
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
          <button type="button" className="add-podcast-form__upload__button">
            Upload Image
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddPodcast;
