import React, { useEffect } from "react";
import "./App.css";
import {
  Outlet,
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Curriculum from "./Components/Curriculum/Curriculum";
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
  }, [location]);

  return (
    <>
      <Navigation />
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
        element: <Curriculum />,
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
