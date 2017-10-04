import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from "../components/Button";

import query from "./query.css";

class Query extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Please make a Selection</h1>
        <div className="center-button">
              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg btn-custom"
                >  Search By Name
               </Button>

              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg btn-custom"
                >  Search By ingredients
              </Button>

        </div>
    </div>
    );
  }
}
export default Query;
