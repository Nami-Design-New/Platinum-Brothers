import useGetEmployee from "../../hooks/useGetEmployeePage";

export default function Methods() {
  const { data } = useGetEmployee();

  return (
    <section className="whyus methods">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <h5>OUR</h5>
            <h2>{data?.recruitments.title}</h2>

            <h6>{data?.recruitments.text}</h6>
            <ul>
              {data?.recruitments.options.map((option, index) => (
                <li key={index}>
                  <img src="/images/check.svg" alt="check" /> {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
