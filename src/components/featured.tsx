import { useState } from "react";
import { useNavigate } from "react-router";
import { featuredData } from "../data/data";
import { useColorModeStore } from "../store/store";

const Featured = () => {
  const [active, setActive] = useState<string>("All");
  const { lightMode } = useColorModeStore();

  const handleActiveContent = (category: string) => {
    setActive(category);
  };

  const navigate = useNavigate();

  return (
    <section className="featured">
      <div className="featured-header">
        <h2
          className={`featured-header__title ${
            lightMode ? "featured-header-title-light" : ""
          }`}
        >
          Featured
        </h2>
        <div className="featured-header__options">
          <button
            onClick={() => handleActiveContent("All")}
            className={`featured-header__options__button ${
              active === "All" ? "active-button" : ""
            }`}
            aria-label="View all featured content"
          >
            All
          </button>

          <button
            onClick={() => handleActiveContent("Premium")}
            className={`featured-header__options__button ${
              active === "Premium" ? "active-button" : "" || lightMode ? "" : ""
            }`}
            aria-label="View premium podcasts"
          >
            Premium
          </button>
          <button
            onClick={() => handleActiveContent("Disabled")}
            className={`featured-header__options__button ${
              active === "Disabled" ? "active-button" : ""
            }`}
            aria-label="View disabled podcasts"
          >
            Disabled
          </button>
        </div>
      </div>
      <div className="featured-content">
        {featuredData.map((featured, index) => {
          return (
            <article
              key={index}
              className={`featured-content__card ${
                lightMode ? "featured-content-card-light" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/`);
                }
              }}
              aria-label={`Go to ${featured.name} podcast`}
            >
              <img
                className="featured-content__card__image"
                src={featured.img}
                alt={`Image of ${featured.name}`}
                aria-label={`Image of ${featured.name}`}
              />
              <p
                className={`featured-content__card__title ${
                  lightMode ? "featured-content-card-light__title" : ""
                }`}
              >
                {featured.name}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
