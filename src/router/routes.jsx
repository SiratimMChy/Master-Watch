import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import ProductDetails from "../Pages/ProductDetails";
import CategoryPage from "../Pages/CategoryPage";
import ProductsPage from "../Pages/ProductsPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
        {
            path: "/",
            element: <Home />,
        },
        {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
        {
            path: "/aboutUs",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/faq",
            element: <Faq />,
        }
    ]
  },
  
]);

export default router;