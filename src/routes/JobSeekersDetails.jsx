import { Link, useParams } from "react-router-dom";
import PageHeader from "../ui/layout/PageHeader";
import useGetJobs from "../hooks/useGetJobs";

export default function JobSeekersDetails() {
  const { id } = useParams();
  const { data: jobs } = useGetJobs();
  const job = jobs?.find((job) => job?.id === +id);
  const jobGeo = job?.advert?.values?.find(
    (value) => value.field_id === "geolocation"
  )?.value;

  const locationData = typeof jobGeo === "string" ? JSON.parse(jobGeo) : jobGeo;
  const location = locationData
    ? `${locationData["locality"]}, ${locationData["country"]}`
    : "";

  const shareUrl = window.location.href;
  const shareTitle = `${job?.advert?.name} - Job Opportunity in ${location}`;

  const handleShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      instagram: `https://www.instagram.com/share?url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(shareTitle)}`,
    };

    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <>
      <PageHeader title="Jobseekers" image={"/images/jobs.jpg"} />
      <section className="jobseekers_details_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12 p-2 order-lg-0 order-1">
              <div className="content">
                <div className="head">
                  <h2>{job?.advert?.name}</h2>
                  <p className="mb-2">
                    <i className="fa-regular fa-location-dot"></i> {location}
                  </p>
                </div>
                <div
                  className="list"
                  dangerouslySetInnerHTML={{
                    __html: job?.advert?.values?.find(
                      (value) => value.field_id === "description"
                    )?.value,
                  }}
                />
                <div
                  className="list"
                  dangerouslySetInnerHTML={{
                    __html: job?.advert?.values?.find(
                      (value) =>
                        value.field_id === "c6eb85a35e963c5454a6003d119a3307"
                    )?.value,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-5 col-12 p-2  order-lg-1 order-0">
              <div className="about_img">
                <img src="/images/cv2.jpg" alt="about" />
              </div>
            </div>
            <div className="col-12 p-2 order-2">
              <div className="bottom_action mt-4">
                <div className="share">
                  <p>Share: </p>

                  <ul>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("facebook");
                        }}
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("instagram");
                        }}
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare("linkedin");
                        }}
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Link to="/jobseekers" className="back_btn">
                  Back to List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
