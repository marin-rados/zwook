import { useEffect, useState } from "react";

type PodcastsType = {
  premium: boolean;
  status: boolean;
  visible: boolean;
  title: string;
  img: string;
};

const Podcasts = () => {
  const [data, setData] = useState<PodcastsType[]>([]);

  const getData = () => {
    fetch("http://localhost:3000/podcasts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="podcasts">
      <div className="podcasts__header">
        <p className="podcasts__header__title">Podcasts</p>
        <button className="podcasts__header__button">View All</button>
      </div>
      <div className="podcasts__cards">
        {data.map((podcast) => {
          return (
            <div
              key={podcast.title}
              style={{ backgroundImage: `url(${podcast.img})` }}
              className="card"
            >
              <div className="card__status">
                <div className="card__status__view">
                  <div
                    className={`card__status__view__circle ${
                      podcast.status ? "" : "offline-circle"
                    }`}
                  ></div>
                  <p
                    className={`card__status__view__text ${
                      podcast.status ? "" : "offline-text"
                    }`}
                  >
                    {podcast.status ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="card__info">
                <div className="card__info__content">
                  <p className="card__info__content__title">{podcast.title}</p>
                  <button className="card__info__content__edition">
                    {podcast.premium ? "Premium" : "Free"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Podcasts;
