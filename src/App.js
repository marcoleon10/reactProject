
import './App.css';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import Catalog from "./pages/catalog";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Admin from "./pages/admin.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <h1>React App</h1>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;


