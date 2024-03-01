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

  async function loadCatalog() {
    let service = new DataService();
    let products = await service.getProducts();
    
    setProducts(products);
    setStatus("Ready");
    
  }

  return (
    <div className="catalog">
      <h1 className="ptSerifCaptionRegular">Catalog: {productState.length} products</h1>
      <h5>Page Status: {status}</h5>
      {productState.map((productArrow) => (
        <Product data={productArrow} key={productArrow._id} />
      ))}
    </div>
  );
}

export default Catalog;
