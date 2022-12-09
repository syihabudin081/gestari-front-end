import "./App.css";

import Landingpage from "./pages/landingpage";

import "tw-elements";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LayoutLanding from "./component/LayoutLanding";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Journey from "./pages/journey";
import Contactus from "./pages/contactus";
import Dashboard from "./pages/dashboard";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;
const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
};
const pageStyle = {};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        style={pageStyle}
        key={pathname}
        animate="in"
        initial="out"
        exit="out"
        variants={pageVariants}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnimationLayout />}>
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
        </Route>
        <Route element={<AnimationLayout />}>
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
        </Route>
        <Route element={<AnimationLayout />}>
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
        </Route>
        <Route element={<AnimationLayout />}>
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
        </Route>
        <Route element={<AnimationLayout />}>
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
        </Route>
        <Route element={<AnimationLayout />}>
        <Route
          path="/dashboard"
          element={
            <LayoutLanding>
              <Dashboard />
            </LayoutLanding>
          }
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
