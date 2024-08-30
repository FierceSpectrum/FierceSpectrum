import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Navegation from "./Components/Navegation/Navegation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

const router = createHashRouter([
  {
    path: "/",
    element: <Navegation />,
    children: [
      {
        path: "Home",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "Curriculum",
        element: <></>,
      },
      {
        path: "Projects",
        element: <></>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
