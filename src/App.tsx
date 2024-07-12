import Header from "./components/header";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <Header />
      </Layout>
    </>
  );
}

export default App;
