import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./styles/style.scss";
import HomePage from "./pages/home-page";
import PlaylistPage from "./pages/playlist-page";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="playlist" element={<PlaylistPage />} />
          {/* <Route path="new" element={<PlaylistPage />} />
          <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
