import "./products.css"
import QuantityPicker from "./quantityPicker.jsx"

//logic
function Product(){
    return (
        <div className="product">
            <img src="https://picsum.photos/160/220" alt=""></img>
            <h5>Here look my awesome products</h5>
            <QuantityPicker/>
        </div>
    );
}

//export
export default Product;