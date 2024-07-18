import ContentLayout from "../pages/content-layout";
import LoginPage from "../pages/login-page";
import { useLoginStore } from "../store/store";
import Sidebar from "./sidebar";

const Layout = () => {
  const { isLogged } = useLoginStore();
  return (
    <div className="layout">
      {isLogged ? (
        <>
          <Sidebar />
          <ContentLayout />
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </div>
  );
};

export default Layout;
