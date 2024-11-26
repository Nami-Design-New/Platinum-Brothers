export default function PageHeader({ title, image }) {
  return (
    <section
      className="Page_header"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="container d-flex h-100">
        <h2>{title}</h2>
      </div>
    </section>
  );
}
