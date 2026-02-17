import { BrowserRouter, Routes, Route, Navigate } from "react-router";


import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

import "./App.css";

import Moon from "./pages/Destinations/Moon";
import Mars from "./pages/Destinations/Mars";
import Europa from "./pages/Destinations/Europa";
import Titan from "./pages/Destinations/Titan";

const App = () => {
  return (
    <div
      className=" min-h-screen w-full bg-cover bg-center bg-fixed"
      
    >
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />}>
            <Route index element={<Navigate to={"/destination/moon"}/>} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
