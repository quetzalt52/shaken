import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from "../components/Button";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Query extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Please make a Selection</h1>
          <Container fluid={true}>
           <Row>
             <Col size="md-12">
              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg"
                >  Search By Name
               </Button>
             </Col>
             <Col size="md-12">
              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg"
                >  Search By ingredients
              </Button>
             </Col>

            </Row>



          </Container>
        </div>
    );
  }
}
export default Query;
