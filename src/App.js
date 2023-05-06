import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FleetPage from "./pages/FleetPage";
import Locations from "./pages/Locations";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import routes from "./routes/Routes";

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.fleet,
      element: <FleetPage />,
    },
    {
      path: routes.locations,
      element: <Locations />,
    },
    {
      path: routes.aboutUs,
      element: <AboutUs />,
    },
    {
      path: routes.FAQ,
      element: <FAQ />,
    },
    {
      path: routes.contact,
      element: <Contact />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
