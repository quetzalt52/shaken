import React from "react";
import "./SearchQueryPic.css";
import backgroundImage from "../../assets/img/query-drinks.jpg"

const SearchQueryPic= () => (
  <div>
    <img src={backgroundImage} className="backgroundImage" alt="Drinks" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://addb.absolutdrinks.com/drinks/"
        >
      </a>
    </div>
  );
export default SearchQueryPic;
