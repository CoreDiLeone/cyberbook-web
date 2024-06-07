import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
function Catalogo() {
 
  return (
    <>
      <Navbar />
      <section>
        <div className="container-md main-container-card">
          <Products />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Catalogo;
