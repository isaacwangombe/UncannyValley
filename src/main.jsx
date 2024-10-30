import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/homepage/homepage";
import { AnimatePresence } from "framer-motion";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
import ComicSelection from "./pages/Comics/ComicSelection/ComicSelection";
import AllComics from "./pages/Comics/AllComics/AllComics.jsx";
// import NewHomePage from "./pages/NewHomePage/NewHomePage copy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComicSelection />,
  },
  {
    path: "comic-categories",
    element: <ComicSelection />,
  },
  {
    path: "all-comics",
    element: <AllComics />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatePresence>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AnimatePresence>
  </StrictMode>
);
