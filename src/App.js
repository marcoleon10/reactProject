
import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Admin from "./pages/admin.jsx";
import Cart from "./pages/cart.jsx";



function App() {
  return (
    
    <div className = "App">
      <div id="home"><Home /></div>
      <div id="catalog"><Catalog /></div>
      <div id="about"><About /></div>
      <div id="cart"><Cart /></div>
       
    </div>
    
    
  );
}

export default App;


