import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guru from "./pages/Guru";
import HotelViz from "./pages/HotelViz";
import ScopusRS from "./pages/ScopusRS";
import SpaceRally from "./pages/SpaceRally";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-[50px]"/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/ScopusRS" element={<ScopusRS />} />
        <Route path="/project/HotelViz" element={<HotelViz />} />
        <Route path="/project/SpaceRally" element={<SpaceRally />} />
        <Route path="/project/Guru" element={<Guru />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
