// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import AdmissionKEC from "./pages/Admission";
import FacilitiesPage from "./pages/Facilities";
import ContactUs from "./pages/ContactUs";
import PlacementPage from "./pages/Placement";
import Notice from "./pages/Notice";
import Research from "./pages/Research";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "admission", element: <AdmissionKEC /> },
      { path: "facilities", element: <FacilitiesPage/> },
      { path: "placements", element: <PlacementPage/> },
      { path: "notice", element: <Notice/> },
      { path: "research", element: <Research/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
