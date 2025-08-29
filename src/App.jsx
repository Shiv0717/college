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
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetails from "./pages/DepartmentDetails";
import NotFound from "./pages/NotFound";
import PageLoader from "./components/PageLoader";
import FacultyPage from "./pages/Faculty";
import MissionVision from "./pages/MissionVision";
import Governance from "./pages/Governance";
import PrincipalMessage from "./pages/PrincipalMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLoader> <Layout /></PageLoader>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "departments", element: <DepartmentsPage/> },
      { path: "departments/:id", element: <DepartmentDetails/> },
      { path: "admission", element: <AdmissionKEC /> },
      { path: "facilities", element: <FacilitiesPage/> },
      { path: "placements", element: <PlacementPage/> },
      { path: "notice", element: <Notice/> },
      { path: "research", element: <Research/> },
      { path: "faculty", element: <FacultyPage/> },
      { path: "mission", element: <MissionVision/> },
      { path: "governance", element: <Governance/>},
      { path: "principal", element: <PrincipalMessage/>},
      { path: "*", element: <NotFound/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
