import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/all-artifacts",
            element: <AllArtifacts/>
        },
        {
            path: "/add-artifacts",
            element: <AddArtifacts/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
    ]
  },
]);
