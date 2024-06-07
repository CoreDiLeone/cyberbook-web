import { Link, useParams } from "react-router-dom";
import "../styles/visit.css";
import Meeting from "../images/chance-meeting.svg";
import Goblet from "../images/goblet-fire.svg";
import LittlePrince from "../images/little-prince.svg";
import Wondla from "../images/Wondla.jpg";
import Peter from "../images/Peter_pan.jpg";
import Sombra from "../images/Sombra_hueso.jpg";
import Narnia from "../images/Las_cronicas_de_Narnia.jpg";
import Quijote from "../images/Don_quijote.jpg";
import Dioses from "../images/Sombra_dioses.jpg";
import Cronicas from "../images/Cronicas.jpg";
import Cumbres from "../images/Cumbres.jpg";
import Alicia from "../images/Alicia.jpg";
import Amor from "../images/Amor.jpg";
import Amanda from "../images/Amanda.jpg";
import Cerebro from "../images/Cerebro.jpg";
import Harry from "../images/Harry.jpg"
function Visit() {

 const slides = [Meeting, Goblet, LittlePrince, 
  Wondla, Peter, Sombra, Narnia, Quijote,
  Dioses, Cronicas, Cumbres, Alicia, Amor, Amanda, Cerebro, Harry ];

 let randomize = []
  randomize.push([slides[Math.floor(Math.random() * slides.length)]])
  console.log(randomize)
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cards-wrapper">
            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Wondla} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalog/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Goblet} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={LittlePrince} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Meeting} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Peter} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="cards-wrapper">
            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Sombra} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info<i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Narnia} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Quijote} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Dioses} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Cronicas} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="cards-wrapper">
            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Cerebro} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info<i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Alicia} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Amanda} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Amor} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>

            <div className="card card-visit">
              <div className="image-wrapper">
                <img src={Harry} alt="..." className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                </p>
                <Link to={`/catalogo`} className="btn-visit">
                Más info<i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Visit;
