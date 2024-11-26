import Contact from "./routes/Contact";
import Employers from "./routes/Employers";
import Home from "./routes/Home";
import JobSeekers from "./routes/JobSeekers";

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
  {
    path: "/jobseekers",
    element: <JobSeekers />,
  },
];

export default router;
