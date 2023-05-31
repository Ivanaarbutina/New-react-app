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
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import Zadaca from "./pages/zadaca";
import Vjezba0305 from "./pages/vjezba0305";
import Vjezba0505 from "./pages/vjezba0505";
import Breweries from "./pages/breweries";
import Pokemons from "./pages/pokemons";
import Europe from "./pages/europe";
import Asia from "./pages/asia";
import Chat from "./pages/chat";
import Vjezba1505 from "./pages/vjezba1505";
import Todo from "./pages/todo";
import SearchApp from "./pages/search-app";
import Artist from "./pages/artist";
import BootstrapExe from "./pages/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/zadaca",
      element: <Zadaca />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/vjezba0505",
      element: <Vjezba0505 />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemons",
      element: <Pokemons />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/asia",
      element: <Asia />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/vjezba1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/searchApp",
      element: <SearchApp />,
    },
    {
      path: "/artist",
      element: <Artist />,
    },
    {
      path: "/bootstrapExe",
      element: <BootstrapExe/>,
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
