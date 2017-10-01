import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import HomePic from"../components/HomePic";

class Home extends React.Component {
    constructor() {
      super();
      this.state ={
        value: null,
      };
    }
    render() {
      return (
        <div>
          <HomePic />
            <h1 className="text-center">Martini Cocktails and More</h1>
              <h2 className="text-center">Disclaimer</h2>
               <Container>
                <Row>
                  <Col size="md-12">
                    <p>
                    All content provided on The-Martini-Project is for informational purposes only. The owner of this blog makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.  The owner of The-Martini-Project will not be liable for any errors or omissions in this information nor for the availability of this information. The owner will not be liable for any losses, injuries, or damages from the display or use of this information.  Blog viewers attempting to follow or replicate the recipes, activities, techniques or tips shown on this website should do so with care, and do so at their own risk.
                    </p>

                    <p>
                    The information, videos, and content provided at The-Martini-Project is intended for adults of legal drinking age.  By viewing or using the information on this website in any way, you are confirming that you are of legal drinking age in your jurisdiction and you are agreeing to hold us harmless for any claims otherwise.
                    </p>

                    <p>
                    It is intended to be an informational resource around alcoholic beverages, ingredients and preparation.  The-Martini-Project provides this information with the intention that adults will use it to create and enjoy alcoholic beverages responsibly and in moderation.  Viewers of this website and users of its content are wholly responsible to ensure compliance with their local food preparation and distribution laws.  The-Martini-Project makes no representations that its recommendations align with the laws of the user’s local jurisdiction.
                    </p>

                    <p>
                    ABarAbove in no way supports, condones, or encourages the consumption of alcoholic beverages in excess, or any other form of alcohol abuse.  The-Martini-Project is not liable for the use of its information by minors or  or unlawful use or consumption of alcohol in any way.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12 text-center">

                    <p className="g-signin2 text-center " data-onsuccess="onSignIn">
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        }
      }
export default Home;
