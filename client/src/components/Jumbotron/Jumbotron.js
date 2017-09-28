import React from "react";
import "./Jumbotron.css";

import background from "../../assets/img/martini-image.jpg"

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <img src={background} className="backgroundImage" alt="martini" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://addb.absolutdrinks.com/drinks/"
      >
         Powered by Absolut Drinks
    </a>
  </div>
);

export default Jumbotron;
