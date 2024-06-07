import BookCoffe from "../images/book-coffe-glasses.png";
import "../styles/Post.css";
import { Link } from "react-router-dom";
function Post() {
  return (
    <>
      <div className="card-body-post">
        <img src={BookCoffe} className="img-thumbnail img-card-post" />
        <div className="card-info-post">
       
          <h4>¿QUERÉS PUBLICAR Y VENDER TUS OBRAS?</h4>
          <p className="mt-4">¡Cumple tu sueño de crear y ganar dinero monetizando tus obras!</p>
          <p>Más abajo podes leer las bases y condiciones.</p>
          <div className="container-btn-post">
          <Link className="btn-post">Más info <i className="bi bi-arrow-right-short"></i></Link>
          <Link className="btn-post" to={"/create"}>Publicar <i className="bi bi-arrow-right-short"></i></Link>
          </div>
          </div>
      </div>

    </>
  );
}

export default Post;
