import Featured from "../components/featured";
import Playlists from "../components/playlists";
import Podcasts from "../components/podcasts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Playlists />
      <Podcasts />
      <Featured />
    </div>
  );
};

export default HomePage;
