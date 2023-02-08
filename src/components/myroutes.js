import * as React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./login";
import Registration from "./Registration";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "sigin",
          element: <Login />,
        },
        { path: "registeration", element: <Registration /> },
      ],
    },
    // { path: "team", element: <AboutPage /> },
  ]);

  return routes;
}
export default AppRoutes;
