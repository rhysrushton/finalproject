import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Accordian from "../components/Accordian"


function FAQ () {
    return(
      <Container>
            <Row>
          <Col size="md-12">

        <Accordian title="Hey" content="dssdsdasdsfadsfddfadsadfdfdfdfasdfadfdfsafddfsa"/>
        <Accordian title="Hey" content="dssdsdasdsfadsfddfadsadfdfdfdfasdfadfdfsafddfsa"/>
        <Accordian title="Hey" content="dssdsdasdsfadsfddfadsadfdfdfdfasdfadfdfsafddfsa"/>
        <Accordian title="Hey" content="<p> dssdsdasdsfadsfddfadsadfdfdfdfasdfadfdfsafddfsa </p>"/>
        </Col>
        </Row>
        </Container>
        

    ); 
}

export default FAQ; 