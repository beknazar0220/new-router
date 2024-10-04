import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Notfound from "./pages/Notfound";
import Servis from "./pages/Servis";
import Figma from "./pages/Figma";
import Profile from "./pages/Profile";
import CreateProduct from "./pages/CreateProduct";
import Main from "./pages/Main";
import Item from "./pages/Item";
import CreatProduct from "./pages/CreatProduct";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./pages/ProductDetail";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"about",
                element: <About/>,
            },
            {
                path:"*",
                element: <Notfound/>,
            },
            {
                path:"servis",
                element: <Servis/>,
            },
            {
                path:"contact",
                element: <Contact/>,
            },
            {
                path: "figma",
                element: <Figma/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "main",
                element: <Main/>,
            },
            {
                path: "create",
                element: <CreateProduct/>,
            },
            {
                path: "creat",
                element: <CreatProduct/>,
            },
            {
                path: "item",
                element: <Item/>,
            },
            {
                path: "product/:id",
                element: <ProductDetail/>,
            },
        ]
    },  
])