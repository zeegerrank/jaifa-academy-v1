import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HandleError from "./pages/HandleError";

function App() {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        { element: <Home />, index: true },
        { element: <About />, path: "about" },
        { element: <Contact />, path: "contact" },
      ],
      errorElement: <HandleError />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
