import Contact from "./routes/Contact";
import Employers from "./routes/Employers";
import Home from "./routes/Home";
import JobSeekers from "./routes/JobSeekers";
import JobSeekersDetails from "./routes/JobSeekersDetails";

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
  {
    path: "/jobseekers/1",
    element: <JobSeekersDetails />,
  },
];

export default router;
