import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Guru from "./pages/Guru";
import HotelViz from "./pages/HotelViz";
import ScopusRS from "./pages/ScopusRS";
import SpaceRally from "./pages/SpaceRally";
import "./App.css";

function App() {

  return (
    <>
      
      <div>
        <Routes>
          <Route path="/pannavich-portfolio/" element={<Home />} />
          <Route path="/pannavich-portfolio/ScopusRS" element={<ScopusRS />} />
          <Route path="/pannavich-portfolio/HotelViz" element={<HotelViz />} />
          <Route
            path="/pannavich-portfolio/SpaceRally"
            element={<SpaceRally />}
          />{" "}
          <Route path="/pannavich-portfolio/Guru" element={<Guru />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
