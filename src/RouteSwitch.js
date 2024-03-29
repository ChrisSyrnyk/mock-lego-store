import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AllSets from "./pages/AllSets";
import StarWarsSets from "./pages/StarWarsSets"
import ArchitectureSets from "./pages/ArchitectureSets";
import TechnicSets from "./pages/TechnicSets";
import HarryPotterSets from "./pages/HarryPotterSets";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mock-lego-store" element={<App />} />
        <Route path="/AllSets" element={<AllSets />} />
        <Route path="/StarWarsSets" element={<StarWarsSets />} />
        <Route path="/ArchitectureSets" element={<ArchitectureSets />} /> 
        <Route path="/TechnicSets" element={<TechnicSets />} />
        <Route path="/HarryPotterSets" element={<HarryPotterSets/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;