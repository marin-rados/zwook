import { categoriesdData } from "../data/data";
import { useColorModeStore } from "../store/store";

const Categories = () => {
  const { lightMode } = useColorModeStore();
  return (
    <div className="categories">
      <div className="categories-header">
        <p
          className={`categories-header__title ${
            lightMode ? "categories-header-title-light" : ""
          }`}
        >
          Categories
        </p>
        <button
          className={`categories-header__button ${
            lightMode ? "categories-header-button-light" : ""
          }`}
        >
          View All
        </button>
      </div>
      <div className="categories-content">
        {categoriesdData.map((category, index) => {
          return (
            <div
              key={index}
              className={`categories-content__card ${
                lightMode ? "categories-content-card-light" : ""
              }`}
            >
              <img
                className="categories-content__card__image"
                src={category.img}
                alt={`Image of ${category.name}`}
              />
              <p
                className={`categories-content__card__title ${
                  lightMode ? "categories-content-card-light__title" : ""
                }`}
              >
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
