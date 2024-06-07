import "../styles/hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section>
      <div className="container-fluid p-0 d-flex justify-content-center main-container">
        <div className="container-md">
          <h1 className="main-title">
            <span className="title-cyber">CYBER</span>
            <span className="title-book">BOOK</span>
          </h1>
          <h2 className="main-subtitle">
            El mejor lugar para comprar,
            <br />
            vender y leer libros online.
          </h2>
          <Link to={{ pathname: "/catalogo" }} className="btn-catalog">
            {" "}
            Ver catálogo<i className="bi bi-arrow-right"></i>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
