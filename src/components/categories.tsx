import { useNavigate } from "react-router";
import { categoriesdData } from "../data/data";
import { useColorModeStore } from "../store/store";

const Categories = () => {
  const { lightMode } = useColorModeStore();
  const navigate = useNavigate();

  return (
    <section className="categories">
      <header className="categories-header">
        <h2
          className={`categories-header__title ${
            lightMode ? "categories-header-title-light" : ""
          }`}
        >
          Categories
        </h2>
        <button
          className={`categories-header__button ${
            lightMode ? "categories-header-button-light" : ""
          }`}
          aria-label="View all categories"
        >
          View All
        </button>
      </header>
      <div className="categories-content">
        {categoriesdData.map((category, index) => {
          return (
            <article
              key={index}
              className={`categories-content__card ${
                lightMode ? "categories-content-card-light" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/`);
                }
              }}
              aria-label={`Go to ${category.name} podcast`}
            >
              <img
                className="categories-content__card__image"
                src={category.img}
                alt={`Image of ${category.name}`}
                aria-label={`Image of ${category.name}`}
              />
              <p
                className={`categories-content__card__title ${
                  lightMode ? "categories-content-card-light__title" : ""
                }`}
              >
                {category.name}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
