import Header from "../components/header";
import HomePage from "./home-page";

const ContentLayout = () => {
  return (
    <>
      <div className="content-layout">
        <Header />
        <div className="displayed-content">
          <HomePage />
        </div>
      </div>
    </>
  );
};
export default ContentLayout;
