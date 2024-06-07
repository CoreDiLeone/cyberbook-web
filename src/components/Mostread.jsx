import "../styles/mostread.css";
import { Link } from "react-router-dom";
import ThreeBooks from "../images/three-books-sm.svg";
function Mostread() {
  return (
    <section className="container-fluid mostread-section">
      <div className="mostread-card">
        <div className="row g-0">
          <div className="col-6 mostread-container-img">
            <img src={ThreeBooks} className="img-fluid rounded-start mostread-card-img" alt="..." />
          </div>
        
            <div className="card-body col-6 ">
              <h5 className="card-title fs-5 m-3 ms-0">Más leídos</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn-mostread" to="/catalogo"> Más info <i className="bi bi-arrow-right-short"></i></Link>
            </div>
          
        </div>
      </div>

 <div className=" text-bg-dark mostread-bg-img">
  <img src={ThreeBooks} className="mostread-card-img" alt="..." />
  <div className="mostread-card-info">
    <h5 className="card-title mb-2 text-center">Más leídos</h5>
    <Link className="btn-mostread" > Más info<i className="bi bi-arrow-right-short"></i></Link>
  </div>
</div>
      
    </section>
  );
}

export default Mostread;
