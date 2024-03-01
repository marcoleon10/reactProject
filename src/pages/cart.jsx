import { useEffect, useState } from "react";
import "./cart.css";
import DataService from "../services/dataService";

function Cart() {

    const [cartList, setCartList] = useState([]);

    useEffect(function () {
        loadCart();
    }, []);

    function loadCart() {
        let service = new DataService();
        let cart = service.readCart();

        setCartList(cart);
    }

    function getTotal(prod) {
        const total = prod.price * prod.quantity;
        return total.toFixed(2);
    }

    function getOrderTotal() {
        let total = 0;
        for (let i = 0; i < cartList.length; i++) {
            total += cartList[i].price * cartList[i].quantity;
        }
        return total.toFixed(2);
    }

    function removeProduct(indexToRemove) {
        const updatedCart = cartList.filter((_, index) => index !== indexToRemove);
        setCartList(updatedCart);
    }

    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="parent">
                <div className="list">
                    {cartList.map((prod, index) => (
                        <div className="cart-prod" key={prod._id}>
                            <img src={"/images/" + prod.image} alt=""></img>
                            <div className="info">
                                <h5>{prod.title}</h5>
                                <p>{prod.category}</p>
                            </div>
                            <label>${prod.price.toFixed(2)}</label>
                            <label>{prod.quantity}</label>
                            <label>{getTotal(prod)}</label>
                            <button className="btn btn-sm btn-danger" onClick={() => removeProduct(index)}>Remove</button>
                        </div>
                    ))}
                </div>

                <div className="aside">
                    <h4>Your total </h4>
                    <label>${getOrderTotal()}</label>
                </div>

            </div>
        </div>
    );
}

export default Cart;
