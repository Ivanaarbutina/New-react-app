import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import "./styles/styles.scss";
import Teorem from "./pages/teorem";
import Fave from "./pages/fave";

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
  ]);

  return (
    <div className="App">
      <Header />

      <RouterProvider router={router} />
    </div>
  );
};

export default App;
