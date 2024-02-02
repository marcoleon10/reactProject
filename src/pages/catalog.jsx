import "./catalog.css"
import Product from "../components/products"
import { useEffect, useState } from "react"; //helps us to refresh a certain piece of the page
import DataService from "../services/dataService";

function Catalog(){
    
    const [productState, setProducts] = useState([]);

    useEffect(function (){
        console.log("somponent is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        
    }

    
    return(
        <div>
            <h1>Look my {productState.length} new awesome product</h1>
            {productState.map(p => <Product data={p}/>)}

        </div>
        

    );
}

export default Catalog;