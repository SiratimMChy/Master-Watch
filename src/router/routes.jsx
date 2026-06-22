import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

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
            path: "/aboutUs",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        }
    ]
  },
  
]);

export default router;