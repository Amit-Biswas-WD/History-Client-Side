import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";

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
    ]
  },
]);
