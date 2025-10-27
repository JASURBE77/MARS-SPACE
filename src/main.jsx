import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import XaridlarTarixi from "./pages/XaridlarTarixi.jsx";
import Shop from "./pages/Shop.jsx";
import Dars from "./pages/Dars.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Blog from "./pages/Blog.jsx";
import KursDetail from "./pages/KursDetail.jsx";
import Kurslar from "./pages/Kurslar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/xaridlar",
        element: <XaridlarTarixi />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/eduverse",
        element: <Dars />,
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path:"/kurslar",
        element: <Kurslar />
      },
      {
         path: "/course/:id",
         element: <KursDetail />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
