import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Timeline from "../components/Timeline/Timeline";




function Mission() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
         
          <Timeline/>
           
          </Col>
        </Row> 
  
      
      </Container>
    );
  }
  
  export default Mission;