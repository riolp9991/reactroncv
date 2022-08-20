import logo from "./logo.svg";
import "./App.css";
import Router from "./components/Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./assets/images/bg.png";

import { Provider } from "react-redux";
import { store } from "./lib/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
