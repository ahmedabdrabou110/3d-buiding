import Header from "./components/Header";
import Footer from "./components/Footer";
import LevelContainer from "./components/levels/LevelContainer";
import Icons from "./components/Icons";
import ItemsContainer from "./components/levels/ItemsContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Icons />
      <div className="map-container">
        <div className="map-main">
          <Header />
          <Footer />
          <Navbar />
          <LevelContainer />
          <ItemsContainer />
        </div>
      </div>
    </>
  );
}

export default App;
