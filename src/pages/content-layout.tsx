import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Player from "../components/player";
import { useColorModeStore } from "../store/store";

const ContentLayout = () => {
  const { lightMode } = useColorModeStore();
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
        <Player />
      </div>
    </>
  );
};
export default ContentLayout;
