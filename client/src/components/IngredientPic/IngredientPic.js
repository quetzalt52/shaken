import React from "react";
import "./IngredientPic.css";
import backgroundImage from "../../assets/img/ingredientSearch.jpg"

const IngredientPic= () => (
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
export default IngredientPic;
