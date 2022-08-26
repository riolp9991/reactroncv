import { HashRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../features/Landing/Pages/LandingPage";
import MooviesPage from "../features/Moovies/Pages/MooviesPage";
import MooviesDetailsPage from "../features/Moovies/Pages/MooviesDetailsPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moovies" element={<MooviesPage />} />
        <Route path="/moovies/:id" element={<MooviesDetailsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
