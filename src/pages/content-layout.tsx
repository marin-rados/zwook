import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Player from "../components/player";
import { useAddPodcastStore, useColorModeStore } from "../store/store";

const ContentLayout = () => {
  const { lightMode } = useColorModeStore();
  const { addPodcast } = useAddPodcastStore();
  return (
    <>
      <div
        className={`content-layout ${lightMode ? "content-layout-light" : ""}`}
      >
        <Header />
        <div
          className={
            lightMode ? "displayed-content-light" : "displayed-content"
          }
        >
          <Outlet />
        </div>
        {addPodcast ? "" : <Player />}
      </div>
    </>
  );
};
export default ContentLayout;
