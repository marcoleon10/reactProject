
import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <div className = "App">
      <h1>React App</h1>
      <Navbar />
      <Catalog />
      <Footer />
    </div>
    
  );
}

export default App;
