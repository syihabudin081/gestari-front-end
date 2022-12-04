import "./App.css";

import Landingpage from "./pages/landingpage";

import "tw-elements";
import { GlobalContext, GlobalProvider } from "./GlobalContext/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutLanding from "./component/LayoutLanding";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Journey from "./pages/journey";
import Contactus from "./pages/contactus";
function App() {
  return (
    // <>
    //   <Navbar/>
    //   <Landingpage/>
    //   <Footer/>
    // </>
    <BrowserRouter>
      <GlobalProvider>
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
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
