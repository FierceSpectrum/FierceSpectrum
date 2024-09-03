import React, { useEffect } from "react";
import "./App.css";
import {
  Outlet,
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Navegation from "./Components/Navegation/Navegation";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state?.scrollTo, location.pathname]);

  return (
    <>
      <Navegation />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Curriculum",
        element: <></>,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      { index: true, element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
