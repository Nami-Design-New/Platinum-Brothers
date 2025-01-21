import useGetEmployee from "../../hooks/useGetEmployeePage";

export default function Why() {
  const { data } = useGetEmployee();

  return (
    <section className="whyus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12 p-2">
            <h5>Why</h5>
            <h2>{data?.second_section.title}</h2>
            <ul>
              {data?.second_section.options.map((option, index) => (
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
