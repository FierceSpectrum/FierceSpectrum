import React, { useEffect } from "react";
import "./App.css";
import {
  Outlet,
  createHashRouter,
  RouterProvider,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Curriculum from "./Components/Curriculum/Curriculum";
import Education from "./Components/Education/Education";
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
        path: "Education",
        element: <Education />,
      },
      {
        // Deep link robusto para compartir (sin ? ni = en la URL):
        // #/Education/bachillerato-ingenieria-software
        path: "Education/:certId",
        element: <Education />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      { index: true, element: <Home /> },
      // Cualquier ruta desconocida (link malformado por un PDF/chat)
      // cae al inicio en vez de la pantalla de error del router.
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
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
