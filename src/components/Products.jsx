import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";
function Products() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=react&keyAIzaSyCnVq0upydYlhaoXlDnhD6VAazQELb1RGU&maxResults=20"
    )
      .then((result) => result.json())
      .then((data) => setBook(data.items));
  }, []);
  console.log(book);
  return book.map((item) => {
    let image = item.volumeInfo.imageLinks.smallThumbnail;
    let title = item.volumeInfo.title;
    let etag = item.etag;
    if (
      image !== undefined &&
      title !== undefined &&
      item.saleInfo.listPrice !== undefined &&
      etag
    ) {
      let amount = item.saleInfo.listPrice.amount;
      return (
        <>
          <div className="main-container-card">
            <div className="sub-container-card">
              <img src={image} alt="" className="card-img img-thumbnail" />
              <h3 className="card-title">{title}</h3>
              <p className="card-amount p-1 m-0">${amount}</p>
              <Link
               to={`view/${item.id}`}
                
                className="btn-product"
              >
                Más info <i className="bi bi-arrow-right-short"></i>
              </Link>
              <button className="btn-product">
                Comprar <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </>
      );
    }
  });
}

export default Products;
