import "../styles/navbar.css";
import { useState, useEffect } from "react";
import CyberBook from "../icons/cyber-book.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);
  useEffect(() => {
    if (search !== "" && results != []) {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&keyAIzaSyCnVq0upydYlhaoXlDnhD6VAazQELb1RGU&maxResults=10"
      )
        .then((result) => result.json())
        .then((data) => setResult(data.items));
    }
  }, [search]);
  console.log("Este es el arreglo", results);
  const navHandler = () => {
    setShowNav(!showNav);
  };
  const searchHandler = () =>{
    setShowSearch(!showSearch)
  }

  return (
    <nav className="nav-bar">
      <div className="container-fluid nav-container">

        <Link to={{ pathname: "/" }}>
          <img
            src={CyberBook}
            alt="ícono de la tienda de libros cyberbook"
            className="menu-icon cyber-book-icon"
          />
        </Link>

        <form
          action=""
          className="d-flex align-items-center w-75 justify-content-center form-container"
        >
          <input
            type="search"
            className="menu-searcher"
            onChange={(e) => setSearch(e.target.value)}
            onClick={searchHandler}
            value={search}
            
          />
          <Link className="btn-searcher">
            <i className="bi bi-search menu-magnify"></i>
          </Link>
          {results.length > 0 ? (<div className={`${showSearch ? "show-search" : "hidde-search"} container-search-results`}>
          <ul className="search-results">  
            {results.map((book) => (
              <li className="result">
                <Link to={`/catalogo/view/${book.id}`}> {book.volumeInfo.title}</Link>      
              </li>
            ))}
          </ul>
          </div>) : (
           <p className={`${showSearch ? "show-search" : "hidde-search"} container-search-results`}>Realice una búsqueda.</p>
          )
       }
        </form>
       
        <div className={`${showNav ? "show" : "hide"} container-icons`}>
          <Link to={{ pathname: "/cart" }}>
            <i className="bi bi-cart3 menu-icon"></i>
          </Link>
          <Link to={{ pathname: "/perfil" }}>
            <i className="bi bi-person menu-icon"></i>
          </Link>
          <Link to={{ pathname: "/create" }}>
            <i className="bi bi-upload menu-icon me-0"></i>
          </Link>
        </div>

        <button className="toggler-menu" type="button" onClick={navHandler}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
