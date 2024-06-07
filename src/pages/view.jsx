import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import "../styles/view.css";
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
function View() {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState();
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${id}&keyAIzaSyCnVq0upydYlhaoXlDnhD6VAazQELb1RGU&maxResults=20`
    )
      .then((result) => result.json())
      .then((data) => setBookInfo(data.items));
  }, [id]);

  console.log(id);
  console.log(bookInfo);
  if (!bookInfo) {
    return (
      <div className="d-flex align-items-center mt-5 flex-column" >
      <div className="spinner-border text-info spinner-load" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      {bookInfo.map((item) => {
        const image = item.volumeInfo.imageLinks?.smallThumbnail;
        const title = item.volumeInfo.title;
        const saleability = item.saleInfo.saleability;
        const description = item.volumeInfo.description;
        const price = item.saleInfo.listPrice?.amount;

        if (item.id === id && title && image) {
          return (
            <>
            <div>
            <Navbar />  
            </div>
              <div className="card-body-view" key={item.id} >
              <img src={image || "Imagen no encontrada"} alt={title} className="img-thumbnail img-card-view" />
              <div className="card-info-view">
              <h4 >{title}</h4>
              <p>{item.searchInfo?.textSnippet || description}</p>
              <p>{price !== undefined ? `Precio: $ ${price}` : saleability}</p>
             <button className={`${price !== undefined ? "show-btn-add" : "hidden-btn-add"} btn-product`}>Agregar al carrito <i className="bi bi-cart-plus"></i></button>
             </div>
             </div>
             
            </>
          );
        }

      })}
      <Footer />
    </div>
  );
}

export default View;

/*Url para vista previa de libro: https://books.google.com.uy/books?id=X4JlEAAAQBAJ&printsec=frontcover&dq=X4JlEAAAQBAJ&hl=es&cd=1&source=gbs_api#v=onepage&q&f=true */
/*// Verificar si el arreglo está definido y tiene al menos un elemento
    // Ahora puedes usar "primerElemento" sin preocuparte por errores
    return (
    bookInfo.map((item)=>{
      //let image = item.volumeInfo.imageLinks.smallThumbnail;
      //let description = item.searchInfo.textSnippet;
      //let author = item.volumeInfo.authors[0];
      //let title = item.volumeInfo.title;
      if(item.id === id && item.saleInfo.listPrice !== undefined){
          //let amount = item.saleInfo.listPrice.amount;
          return (
          
          <div>
            <h4>{title}</h4>
            <img src={image} alt="" />
            <p>{author}</p>
            <p>{amount}</p>
            <p>{description}</p>
          </div>       
          
                  );
              }
              
          } */
