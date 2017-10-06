import React from "react";
import { Link } from "react-router-dom";
import "./Link.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Link = props =>


      <ul className="pageLinks">

         <li> <Link to="/search">Search</Link>
        </li>

        // <li className={window.location.pathname === "/search" ? "active" : ""}>
        //    <Link to="/listIngredients">Search by Ingredient </Link>
        // </li>
      </ul>


export default Link;
