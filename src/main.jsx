import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/homepage/homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import PageFlip from "./pages/pageFlip/pageFlip.jsx";
import NewHomePage from "./pages/NewHomePage/NewHomePage";
import ComicSelection from "./pages/Comics/ComicSelection/ComicSelection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageFlip />,
  },
  {
    path: "all-comics",
    element: <PageFlip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
