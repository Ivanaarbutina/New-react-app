import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import "./styles/styles.scss";
import Teorem from "./pages/teorem";
import Fave from "./pages/fave";
import Varijable from "./pages/varijable";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/teorem",
      element: <Teorem />,
    },
    {
      path: "/fave",
      element: <Fave />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
  ]);

  return (
    <div className="App">
      <Header />

      <RouterProvider router={router} />
    </div>
  );
};

export default App;
