import { useState } from "react";
import { featuredData } from "../data/data";

const Featured = () => {
  const [active, setActive] = useState<string>("All");

  const handleActiveContent = (category: string) => {
    setActive(category);
  };

  return (
    <div className="featured">
      <div className="featured-header">
        <p className="featured-header__title">Featured</p>
        <div className="featured-header__options">
          <button
            onClick={() => handleActiveContent("All")}
            className={`featured-header__options__button ${
              active === "All" ? "active-button" : ""
            }`}
          >
            All
          </button>

          <button
            onClick={() => handleActiveContent("Premium")}
            className={`featured-header__options__button ${
              active === "Premium" ? "active-button" : ""
            }`}
          >
            Premium
          </button>
          <button
            onClick={() => handleActiveContent("Disabled")}
            className={`featured-header__options__button ${
              active === "Disabled" ? "active-button" : ""
            }`}
          >
            Disabled
          </button>
        </div>
      </div>
      <div className="featured-content">
        {featuredData.map((featured, index) => {
          return (
            <div key={index} className="featured-content__card">
              <img
                className="featured-content__card__image"
                src={featured.img}
                alt={`Image of ${featured.name}`}
              />
              <p className="featured-content__card__title">{featured.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
