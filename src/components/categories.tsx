import { categoriesdData } from "../data/data";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-header">
        <p className="categories-header__title">Categories</p>
        <button className="categories-header__button">View All</button>
      </div>
      <div className="categories-content">
        {categoriesdData.map((category, index) => {
          return (
            <div key={index} className="categories-content__card">
              <img
                className="categories-content__card__image"
                src={category.img}
                alt={`Image of ${category.name}`}
              />
              <p className="categories-content__card__title">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
