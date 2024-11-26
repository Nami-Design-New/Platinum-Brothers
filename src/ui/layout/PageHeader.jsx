export default function PageHeader({ title }) {
  return (
    <section className="Page_header">
      <div className="container d-flex h-100">
        <h2>{title}</h2>
      </div>
    </section>
  );
}
