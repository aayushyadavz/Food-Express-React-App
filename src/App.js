import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
import appstore from "./utils/appStore";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import CartPopup from "./components/CartPopup";

const AppLayout = () => {
  const location = useLocation();

  return (
    <Provider store={appstore}>
      <>
        {location.pathname.startsWith("/menu/") && <CartPopup />}
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
