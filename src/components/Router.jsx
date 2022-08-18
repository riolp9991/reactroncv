import { HashRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../features/Landing/Pages/LandingPage";
import MooviesPage from "../features/Moovies/Pages/MooviesPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moovies" element={<MooviesPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
