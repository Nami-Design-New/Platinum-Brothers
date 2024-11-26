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
];

export default router;
