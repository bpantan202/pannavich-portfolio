import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guru from "./pages/Guru";
import HotelViz from "./pages/HotelViz";
import ScopusRS from "./pages/ScopusRS";
import SpaceRally from "./pages/SpaceRally";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ScopusRS" element={<ScopusRS />} />
        <Route path="/HotelViz" element={<HotelViz />} />
        <Route path="/SpaceRally" element={<SpaceRally />} />
        <Route path="/Guru" element={<Guru />} />
      </Routes>
    </>
  );
}

export default App;
