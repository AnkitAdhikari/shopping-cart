import ErrorPage from "./ErrorPage";
import TickCart from "./TickCart";
import Home from "./components/Home/Home";
import Jewelry from "./components/Jewelry/Jewelry";
import Smartphones from "./components/Smartphones/Smartphones";
import Watches from "./components/Watches/Watches";

const routes = [
  {
    path: "/",
    element: <TickCart />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "men-watches",
        element: <Watches />,
      },
      {
        path: "women-jewelry",
        element: <Jewelry />,
      },
      {
        path: "smartphones",
        element: <Smartphones />,
      },
    ],
  },
];

export default routes;
