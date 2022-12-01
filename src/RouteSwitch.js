import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AllSets from "./AllSets";
import StarWarsSets from "./pages/StarWarsSets"
import ArchitectureSets from "./pages/ArchitectureSets";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AllSets" element={<AllSets />} />
        <Route path="/StarWarsSets" element={<StarWarsSets />} />
        <Route path="/ArchitectureSets" element={<ArchitectureSets />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;