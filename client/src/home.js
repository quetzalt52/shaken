import React, { Component } from "react";

class home extends React.Component {
  constructor() {
    super();
    this.state ={
      text:"California's statute regarding possession of alcohol by a person under the age of 21 years includes an exception for responsiblea, adult relative but does not specify which relatives are included. APIS interprets the phrase “responsible adult relative” as including a spouse."
    };
  }

  handleChange = event =>{
      this.setState({text: text});
  };

    render() {
    const img = assets("./img/martini-drinks-main.jpg");

   return <div>
    {this.state.text}
    <img src={img} />
    <button onClick={(event) =>{this.handleChange}}>Enter</button>
  </div>
 }
}
export default home;
