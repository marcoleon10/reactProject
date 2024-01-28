import "/quantityPicker.css";
import { useState } from "react";

function quantityPicker()
{
    function decrease(){
        console.log("Decreasing");
    }

    function increase(){
        console.log("Increasing");
    }

    return(
        <div className="quantity-picker">
            <button onClick={decrease} className="btn btn-sm btn-primary">-</button>
            <label className="value">1</label>
            <button onClick={increase} className="btn btn-sm btn-primary">+</button>
        </div>
    );
}