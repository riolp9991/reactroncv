import { HashRouter, Route, Routes } from "react-router-dom";

import LandingPage from "../features/Landing/Pages/LandingPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profiles" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
