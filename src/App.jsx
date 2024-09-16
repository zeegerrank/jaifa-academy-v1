import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Career from "./pages/Career";
import Inquire from "./pages/Inquire";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        { element: <Home />, index: true },
        { element: <About />, path: "about" },
        { element: <News />, path: "news" },
        { element: <Career />, path: "career" },
        { element: <Inquire />, path: "inquire" },
        { element: <Contact />, path: "contact" },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
