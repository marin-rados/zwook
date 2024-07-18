import ContentLayout from "../pages/content-layout";
import LoginPage from "../pages/login-page";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <LoginPage />
      {/* <Sidebar />
      <ContentLayout /> */}
    </div>
  );
};

export default Layout;
