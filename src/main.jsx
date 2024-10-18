import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/homepage/homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
import ComicSelection from "./pages/Comics/ComicSelection/ComicSelection";
import AllComics from "./pages/Comics/AllComics/AllComics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComicSelection />,
  },
  {
    path: "all-comics",
    element: <AllComics />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
