import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './Home/Home.jsx'
import Profiles from './Profiles/Profiles.jsx'

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
