import Blogs from "../Pages/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Order from "../Pages/Order/Order";
import Register from "../Pages/Register";
import AllTool from "../Pages/Tools/AllTool";

export const PublicRoutes = [
    { path: "/", name: "Home", Component: Home },
    { path: "home", name: "Home", Component: Home },
    { path: "blogs", name: "Blogs", Component: Blogs },
    { path: "login", name: "Login", Component: Login },
    { path: "register", name: "register", Component: Register },
    { path: "dashboard", name: "dashboard", Component: Dashboard },
    { path: "allTool", name: "allTool", Component: AllTool },
    { path: "order/:id", name: "order", Component: Order },
    { path: "*", name: "NotFound", Component: NotFound },
]