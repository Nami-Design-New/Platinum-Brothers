import Contact from "./routes/Contact";
import Employers from "./routes/Employers";
import Home from "./routes/Home";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employers",
    element: <Employers />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default router;
