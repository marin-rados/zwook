import Categories from "../components/categories";
import Featured from "../components/featured";
import Playlists from "../components/playlists";
import Podcasts from "../components/podcasts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Playlists />
      <Podcasts />
      <Featured />
      <Categories />
    </div>
  );
};

export default HomePage;
