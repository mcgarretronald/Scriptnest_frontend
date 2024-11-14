import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Projects from './Components/Projects/index.jsx';
import Support from './Components/Support/index.jsx';
import Login from './Components/Login/index.jsx';
import Signup from './Components/Signup/index.jsx';
import ScriptForm from './Components/Scriptform/index.jsx';
import NotFoundPage from './Components/ErrorPage/index.jsx';
// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/scriptform",
    element: <ScriptForm />,
  }

]);

// Render Application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
