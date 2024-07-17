import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./styles/style.scss";
import HomePage from "./pages/home-page";
import PlaylistPage from "./pages/playlist-page";
import AddPodcast from "./pages/add-podcast";
// import LoginPage from "./pages/login-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="playlist/:playlistId" element={<PlaylistPage />} />
          <Route path="podcast/add" element={<AddPodcast />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
