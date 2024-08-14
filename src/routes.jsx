import ErrorPage from "./ErrorPage";
import TickCart from "./TickCart";
import AllProducts from "./components/AllProducts/AllProducts";
import Home from "./components/Home/Home";
import Jewelry from "./components/Jewelry/Jewelry";
import Smartphones from "./components/Smartphones/Smartphones";
import Watches from "./components/Watches/Watches";
import Cart from "./components/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <TickCart />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
