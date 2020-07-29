import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Accordian from "../components/Accordian"


function FAQ () {
    return(
      <Container>
      
<Row>
    <Col  size="md-12">
        <Accordian title="Where are we?" content="KRMC is located at 36 Kildare Road, Blacktown, NSW 2148"/>
        <Accordian title="How do you Contact us?" content=" Reception: 8822 3000 "/>
        <Accordian title="Parking" content="A small car park is situated behind the Centre, with disabled parking spaces at the front and rear of the building.  Alternatively, 3 hours free parking is available next door at Westpoint Shopping Centre.  If parking in Westpoint, it is best to park on Level 2, then exit the centre near JB HiFi and turn left onto Kildare Road.  KRMC is located on the corner, next to the traffic lights."/>
        <Accordian title="Is there disabled access" content=" Yes.  There are two parking spaces for disabled visitors, one at the front of the building and one in the car park behind the Centre, with level access into the Centre itself.  A wheelchair ramp at the front of the Centre allows easy access from Kildare Road.  There is also a lift inside the Centre. "/>
        <Accordian title="Is Bulk Billing Avilable" content="Yes.  GP consultations are bulk-billed for Medicare card holders."/>
        </Col>
        </Row>
        </Container>
        

    ); 
}

export default FAQ; 