import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  {
    element: <PrivateRoutes />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
]);

export default router;
