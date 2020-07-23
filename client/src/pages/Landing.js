
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Input, FormBtn} from "../components/Form";



function handleFormSubmit(event){
  event.preventDefault();
  console.log("info")
}




function SignIn() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Login</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                lol
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <form>
      <Input
      name="username"
      placeholder="username"
      />
      <Input
      name="password"
      placeholder="password"
      
      />
      <FormBtn
      onClick={handleFormSubmit}
      
      
      >Login</FormBtn>
      </form>
    </Container>
  );
}

export default SignIn;
