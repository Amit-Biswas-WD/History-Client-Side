import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FeaturedArtifactsDetails from "../components/FeaturedArtifactsDetails/FeaturedArtifactsDetails";
import Like from "../pages/Like/Like";
import MyAdd from "../pages/MyAdd/MyAdd";
import PrivateRoutes from "./PrivateRoutes";
import Update from "./../pages/MyAdd/Update/Update";
import ArtifactDetails from "../pages/AllArtifacts/ArtifactDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-artifacts",
        element: (
          <PrivateRoutes>
            <AllArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoutes>
            <AddArtifacts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <FeaturedArtifactsDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/history/${params.id}`),
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/my-add",
        element: <MyAdd />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts/${params.id}`),
      },
      {
        path: "/artifactDetails/:id",
        element: <ArtifactDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifacts/${params.id}`),
      },
    ],
  },
]);
