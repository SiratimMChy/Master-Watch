import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import ProductsPage from "../Pages/ProductsPage";

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