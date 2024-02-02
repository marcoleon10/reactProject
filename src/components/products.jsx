import "./products.css"
import QuantityPicker from "./quantityPicker.jsx"

//logic
function Product(props){
    return (
        <div className="product">
            <img src={"/images/" + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <QuantityPicker/>
        </div>
    );
}

//export
export default Product;