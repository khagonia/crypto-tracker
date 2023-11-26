import { Provider } from "react-redux";
import store from "./store/index";
import { Outlet } from "react-router-dom";
import NavSection from "./components/Layout/NavSection"
import FooterSection from "./components/Layout/FooterSection"

import "./css/globals.css";

function App() {
  return (
    <Provider store={store}>
      <NavSection />
      <Outlet />
      <FooterSection />
    </Provider>
  );
}

export default App;
