import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import Header from "./components/Header";
import ViewDetails from "./components/ViewDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "statics",
    element: <Statistics />,
  },
  {
    path: "applied",
    element: <AppliedJobs />,
  },
  {
    path: "blog",
    element: <Blog></Blog>,
  },
  {
    path: "/views/:id",
    element: <ViewDetails></ViewDetails>,
    loader: ({ params }) =>
      fetch('/features.json').then((response) => response.json()),
  },
  {
    path:"apply",
    element:<AppliedJobs />
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
