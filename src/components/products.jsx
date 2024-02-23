import DataService from "../services/dataService.js";
import "./products.css";
import QuantityPicker from "./quantityPicker.jsx";
import { useEffect, useState } from "react";


//logic
function Product(props) {
    const [quantity,setQuantity] = useState(1);

    useEffect(function(){
        console.log("Hello, this is a product");
    },[]);
  
  
    function onQuantityChange(qty) {
      setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function add(){
      const prod4cart = {
        ...props.data,
        quantity: quantity,
      };

      let service = new DataService()
      service.addToCart(prod4cart);
    }
  
    return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">${getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantityChange={onQuantityChange}> </QuantityPicker>
        <button onClick={add} className="btn btn-sm btn-secondary"> Add </button>
      </div>
    </div>
  );
}

//export
export default Product;
