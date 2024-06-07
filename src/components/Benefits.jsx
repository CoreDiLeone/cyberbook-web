import "../styles/benefits.css";

function Benefits({imgOne, imgTwo, imgThree }) {
  return (
    <>
     <div className="container-benefits">
      <img src={imgOne} alt="" className="benefits-img img-thumbnail"/>
      <img src={imgTwo} alt="" className="benefits-img img-thumbnail"/>
      <img src={imgThree} alt="" className="benefits-img img-thumbnail"/>
     </div>
    </>
  );
}

export default Benefits;
