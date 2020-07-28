import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Timeline from "../components/Timeline/Timeline";
import Jumbotron from "../components/Jumbotron"





function Mission() {
    return (
    
        <Container fluid>
            <Row>
            <Col size="md-12">
      <Jumbotron>
          <h1>Our Mission</h1>
          <br></br>
      <p>Kildare Road Medical Centre opened in April 2010, following a major refurbishment of the site by its new owners. It is a modern, welcoming facility offering convenient on-site access to a wide range of high quality medical services.

With our long connection to Blacktown City, we understand the healthcare needs of the community we serve and we are committed to providing the best possible standard of care for our patients. Here you will find highly trained, experienced GPs, specialists, allied health professionals and nursing staff, with a range of skills to provide you with quality comprehensive care.

Our online booking system (below) allows patients to schedule appointments at a time which suits them and is intended to encourage patients to develop an ongoing relationship with their GP and/or Physio, thereby ensuring continuity of care.

We look forward to welcoming you to Kildare Road Medical Centre.</p>
      </Jumbotron>
      </Col>
      </Row>
             <h1>Our Story</h1>
          <Timeline/>


         
          </Container>
     
           
      
    );
  }
  
  export default Mission;