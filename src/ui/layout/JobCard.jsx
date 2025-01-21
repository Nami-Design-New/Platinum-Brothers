import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const jobGeo = job?.advert?.values?.find(
    (value) => value.field_id === "geolocation"
  )?.value;

  const locationData = typeof jobGeo === "string" ? JSON.parse(jobGeo) : jobGeo;
  const location = locationData
    ? `${locationData["locality"]}, ${locationData["country"]}`
    : "";

  const date = new Date(job?.valid_start);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();

  return (
    <div className="cv">
      <div className="img">
        <img src="/images/cv1.jpg" alt="cv1" />
      </div>
      <div className="content">
        <div className="head">
          <h3>{job?.advert?.name}</h3>
          <h6>
            <i className="fa-light fa-location-dot"></i> {location}
          </h6>

          <div className="date">
            <b>{day}</b>
            <b>{month}</b>
            <b>{year}</b>
          </div>
        </div>

        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: job?.advert?.values?.find(
              (value) => value.field_id === "description"
            )?.value,
          }}
        />

        <div className="actions">
          <Link target="_blank" to={job?.application_form}>
            Apply Now
          </Link>
          <Link to={`/jobseekers/${job?.id}`}>More</Link>
        </div>
      </div>
    </div>
  );
}
