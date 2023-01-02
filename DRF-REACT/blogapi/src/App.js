import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {CookiesProvider} from "react-cookie";
import Home from "./pages/Home";
import ListSheet from "./pages/sheets/ListSheet";
import DetailSheet from "./pages/sheets/DetailSheet";
import Register from "./pages/users/Register";
import Login from "./pages/users/Login";
import Logout from "./pages/users/Logout";
import Layout from "./pages/Layout";

export const primaryRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Sheets",
    path: "/sheets",
    children: [
      {
        name: "Sheets",
        index: "true",
        element: <ListSheet />,
      },
      {
        name: "Sheet",
        path: "1",
        element: <DetailSheet />,
      },
    ],
  },
  // {
  //   name: "Sheet",
  //   path: "/sheet",
  //   children: [
  //     {
  //       index: "true",
  //       name: "Projects",
  //       element: <FindProjects />,
  //       loader: () => {
  //         return getProjectList();
  //       },
  //     },
  //     {
  //       name: "Project",
  //       path: ":projectId",
  //       element: <Project />,
  //       loader: ({ params }) => {
  //         return getProject(params.projectId);
  //       },
  //     },
  //   ],
  // },
];

export const authenticationRoutes = [
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Logout",
    path: "/logout",
    element: <Logout />,
  },
];

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        ...primaryRoutes,
        ...authenticationRoutes,
        // {
        //   name: "Profile",
        //   path: "/profile",
        //   children: [
        //     {
        //       name: "Profile",
        //       path: ":memberId",
        //       element: <Profile />,
        //       loader: async function loader({ params }) {
        //         return getMemberDetail(params.memberId);
        //       },
        //     },
        //   ],
        // },
      ],
    },
  ]);

  return <RouterProvider forceRefresh={true} router={router} />;
};

export default App;
