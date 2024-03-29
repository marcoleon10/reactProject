import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props)
{
    
    const[quantity, setQuantity] = useState(1); // [0, function(){} 

    function decrease(){
        let val = quantity - 1;
        setQuantity(val);
        props.onQuantityChange(val);
        console.log("Decreasing");
    }

    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onQuantityChange(val);
        console.log("Increasing");
    }

    return(
        <div className="quantity-picker">
            <button disabled = {quantity===1} onClick={decrease} className="btn btn-dark">-</button>
            <label className="value">{quantity}</label>
            <button onClick={increase} className="btn btn-dark">+</button>
        </div>
    );
}

//Here goes the exports
export default QuantityPicker;