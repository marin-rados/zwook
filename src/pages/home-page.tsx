import Header from "../components/header";
import Playlists from "../components/playlists";
import Podcasts from "../components/podcasts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Playlists />
      <Podcasts />
    </div>
  );
};

export default HomePage;
