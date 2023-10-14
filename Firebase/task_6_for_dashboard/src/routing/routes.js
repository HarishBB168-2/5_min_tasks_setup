import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Signup from "../components/Signup";
import Login from "../components/Login";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

export default router;
