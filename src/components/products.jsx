import "./products.css";
import QuantityPicker from "./quantityPicker.jsx";
import { useEffect } from "react";

//logic
function Product(props) {
  

    useEffect(function(){
        console.log("Hello, this is a product");
    },[]);
  
  
  
  
    return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">${props.data.price.toFixed(2)}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuantityPicker />
        <button className="btn btn-sm btn-secondary"> Add </button>
      </div>
    </div>
  );
}

//export
export default Product;
