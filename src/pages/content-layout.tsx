import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Player from "../components/player";
// import HomePage from "./home-page";

const ContentLayout = () => {
  return (
    <>
      <div className="content-layout">
        <Header />
        <div className="displayed-content">
          {/* <HomePage /> */}
          <Outlet />
        </div>
        <Player />
      </div>
    </>
  );
};
export default ContentLayout;
