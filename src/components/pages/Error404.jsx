import { useNavigate } from "react-router";

const Error404 = () => {
  const navegacion = useNavigate();

  return (
    <section className="text-center container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/755/755014.png"
        alt="error 404"
        className="img-fluid"
      />
      <div className="my-4">
        <button className="btn btn-warning" onClick={() => navegacion("/")}>
          Volver al inicio
        </button>
      </div>
    </section>
  );
};

export default Error404;
