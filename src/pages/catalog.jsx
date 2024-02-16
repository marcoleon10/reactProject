import "./catalog.css";
import Product from "../components/products";
import { useEffect, useState } from "react"; //helps us to refresh a certain piece of the page
import DataService from "../services/dataService";

function Catalog() {
  const [productState, setProducts] = useState([]);
  const [status, setStatus] = useState('blank');

  useEffect(function () {
    console.log("component is loaded");
    setStatus("Loading...");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let products = service.getProducts();
    
    setProducts(products);
    setStatus("Ready");
    
  }

  return (
    <div>
      <h1>Look my {productState.length} new awesome product</h1>
      <h5>Page Status: {status}</h5>
      {productState.map((p) => (
        <Product data={p} />
      ))}
    </div>
  );
}

export default Catalog;
