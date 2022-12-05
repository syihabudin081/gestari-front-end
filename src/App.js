import "./App.css";

import Landingpage from "./pages/landingpage";

import "tw-elements";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutLanding from "./component/LayoutLanding";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Journey from "./pages/journey";
import Contactus from "./pages/contactus";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    // <>
    //   <Navbar/>
    //   <Landingpage/>
    //   <Footer/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LayoutLanding>
                <Landingpage />
              </LayoutLanding>
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <LayoutLanding>
                <AboutUs />
              </LayoutLanding>
            </>
          }
        />
        <Route
          path="/catalog"
          element={
            <>
              <LayoutLanding>
                <Catalog />
              </LayoutLanding>
            </>
          }
        />
        <Route
          path="/journey"
          element={
            <>
              <LayoutLanding>
                <Journey />
              </LayoutLanding>
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <LayoutLanding>
                <Contactus />
              </LayoutLanding>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LayoutLanding>
              <Dashboard />
            </LayoutLanding>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
