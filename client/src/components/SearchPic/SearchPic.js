import React from "react";
import "./SearchPic.css";

import background from "../../assets/img/martini-image.jpg"



const SearchPic= () => (
  <div>
    <img src={background} className="backgroundImage" alt="martini" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://addb.absolutdrinks.com/drinks/"
        >
      </a>
    </div>
  );
export default SearchPic;
