export default function Loader({ className }) {
  return (
    <div className={`loader ${className}`}>
      <i className="fa-solid fa-spinner fa-spin"></i>
    </div>
  );
}
