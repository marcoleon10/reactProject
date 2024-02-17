import "./admin.css"
import { useState } from "react";

function Admin() {

    const[product,setProduct] = useState({
        title:"",
        category:"",
        prices:"",
        image:""});

    function handleInputChange(e){
        const val = e.target.value;
        const name = e.target.name;

        //create the copy, modify it and send it back
        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct(){
        console.log("Saving product", product);
        //save the server
        clearForm();
    }

    function clearForm(){
        setProduct({
            title:"",
            category:"",
            prices:"",
            image:""
        });
    };

    return(
        <div className="admin-page">
            <h1>Store Management</h1>

            <div className="parent-continer">
                <h3>Register products</h3>
            </div>

            <div>
                <label>Title</label>
                <input
                value={product.title}
                onChange={handleInputChange}
                name="title"
                type="text"
                className="form-control"
                />
            </div>

            <div>
                <label>Image</label>
                <input
                value={product.image}
                onChange={handleInputChange}
                name="image"
                type="text"
                className="form-control"
                />
            </div>

            <div>
                <label>Prices</label>
                <input
                value={product.prices}
                onChange={handleInputChange}
                name="prices"
                type="number"
                className="form-control"
                />
            </div>


            <div>
                <label>Category</label>
                <input
                value={product.category}
                onChange={handleInputChange}
                name="category"
                type="text"
                className="form-control"
                />
            </div>


            <button onClick={saveProduct} className="btn btn-primary">Save</button>
        </div>
    )
}

export default Admin;