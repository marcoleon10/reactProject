
import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";

function App() {
  return (
    <div className = "App">
      <h1>React App</h1>
      <Navbar />
      <Home/>
      <Catalog />
      <About/>
      <Footer />
    </div>
    
  );
}

export default App;


