import { createBrowserRouter } from "react-router-dom";
import Homee from "../Home/Homee/Homee";
import Main from "../Layout/Main";
import About from "../About/About";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Instractors from "../Instractors/Instractors";
import Classes from "../Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import AddClass from "../Dashboard/AddClass/AddClass";
import MyClasses from "../MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Profile from "../Dashboard/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homee></Homee>,
      },
      {
        path: "/",
        element: <Homee></Homee>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/instractors",
        element: <Instractors></Instractors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
