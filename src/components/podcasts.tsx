import { useEffect, useState } from "react";
import { useColorModeStore } from "../store/store";
import deleteIcon from "../assets/icons/add-podcast/delete.svg";
import editIcon from "../assets/icons/add-podcast/edit.svg";
import { PodcastsType } from "../types/global";
import { useNavigate } from "react-router-dom";

const Podcasts = () => {
  const [data, setData] = useState<PodcastsType[]>([]);
  const { lightMode } = useColorModeStore();

  const navigate = useNavigate();

  const getData = () => {
    fetch("http://localhost:3000/podcasts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch");
      })
      .then((data) => {
        const resetData = data.map((podcast: PodcastsType) => {
          return { ...podcast, deleted: false };
        });

        const updatePromises = resetData.map((podcast: PodcastsType) => {
          return fetch(`http://localhost:3000/podcasts/${podcast.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(podcast),
          });
        });

        // Wait for all updates to complete
        Promise.all(updatePromises)
          .then(() => {
            // Set the state with the reset data
            setData(resetData);
          })
          .catch((err) => {
            console.error("Failed to update podcasts:", err);
          });
      })
      .catch((err) => {
        console.error("Failed to fetch podcasts:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id: string) => {
    fetch(`http://localhost:3000/podcasts/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch podcast for deletion");
      })
      .then((podcast) => {
        podcast.deleted = true;
        return fetch(`http://localhost:3000/podcasts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(podcast),
        });
      })
      .then((res) => {
        if (res.ok) {
          // Filter out the deleted podcast from the current state
          setData((prevData) => prevData.filter((p) => p.id !== id));
        } else {
          throw new Error("Failed to update podcast as deleted");
        }
      })
      .catch((err) => {
        console.error("Failed to delete podcast:", err);
      });
  };

  return (
    <section className="podcasts">
      <div className="podcasts__header">
        <h2
          className={`podcasts__header__title ${
            lightMode ? "podcasts-header-title-light" : ""
          }`}
        >
          Podcasts
        </h2>
        <button
          className={`podcasts__header__button ${
            lightMode ? "podcasts-header-button-light" : ""
          }`}
          aria-label="View all podcasts"
        >
          View All
        </button>
      </div>
      <div
        className={`podcast-scroll ${lightMode ? "podcast-scroll-light" : ""}`}
      >
        <div className="podcasts__cards">
          {data.map((podcast) => {
            return (
              <article
                key={podcast.title}
                style={{ backgroundImage: `url(${podcast.img})` }}
                className="card"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/podcasts/${podcast.id}`);
                  }
                }}
                aria-label={`Go to ${podcast.title} podcast`}
              >
                <div className="card__status">
                  <div className="card__status__actions">
                    <img
                      onClick={() => {
                        deleteData(podcast.id);
                      }}
                      aria-label={`Delete ${podcast.title}`}
                      src={deleteIcon}
                      alt="Delete Icon"
                      className="card__status__actions__img"
                    />
                    <img
                      src={editIcon}
                      onClick={() => {
                        navigate(`/podcasts/${podcast.id}`);
                      }}
                      aria-label={`Edit ${podcast.title}`}
                      alt="Edit Icon"
                      className="card__status__actions__img"
                    />
                  </div>
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
                    <p className="card__info__content__title">
                      {podcast.title}
                    </p>
                    <button className="card__info__content__edition">
                      {podcast.premium ? "Premium" : "Free"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
