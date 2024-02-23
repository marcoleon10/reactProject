//Here goes the imports
import "./navbar.css";

import {Link} from "react-router-dom"; //All the "<a>" tags will have to replaced the "href" to "to", and all the anchor (<a>) tags will have to be replaced by "Link" tags

//Here goes the logic
function Navbar() {
  return (
    <div className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/footer">Contact</Link>
        </li>
      </ul>
        
    </div>
  );
}

//Here goes the exports
export default Navbar;
