import Header from "./components/Header";
import Footer from "./components/Footer";
import LevelContainer from "./components/levels/LevelContainer";
import Icons from "./components/Icons";
import ItemsContainer from "./components/levels/ItemsContainer";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import { useContext } from "react";
import { currentLevelContext } from "./hooks/useCurrentLevel";
function App() {
  const ctx = useContext(currentLevelContext);
  return (
    <>
      <Icons />
      <div
        className={`map-container ${
          ctx?.open ? "map-container--overflow" : ""
        } `}
      >
        <div className="map-main">
          <Header />
          <Footer />
          <Navbar />
          <LevelContainer />
          <ItemsContainer />
        </div>
        <Aside />
      </div>
    </>
  );
}

export default App;
