//Here goes the imports
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

import {Link} from "react-router-dom"; //All the "<a>" tags will have to replaced the "href" to "to", and all the anchor (<a>) tags will have to be replaced by "Link" tags

//Here goes the logic
function Navbar() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarColor('transparent');
      } else {
        setNavbarColor('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="nav" style={{ backgroundColor: navbarColor, transition: 'background-color 0.3s ease'}}>
      <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
        <div className="d-flex">
            <input className="form-control me-2 ptSerifCaptionRegular" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
        <a className="navbar-brand ptSerifCaptionRegular" href="#home" style={{ color: 'white' }}>I N Z Z A</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav playfairDisplayRegular">
            <li className="nav-item">
              <a className="nav-link" href="#catalog">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cart">Cart</a>
            </li>
          </ul>
        </div>
        
        
        
      </div>
    </nav>
        
    </div>
  );
}

//Here goes the exports
export default Navbar;
