import React from "react";
import "./HomePic.css";
import backgroundImage from "../../assets/img/martini-drinks-main.jpg"

const HomePic= () => (
  <div className="The Martini Project text-center">
    <img src={backgroundImage} className="backgroundImage" alt="martini" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://addb.absolutdrinks.com/drinks/"
        >
      </a>
    </div>
  );
export default HomePic;
