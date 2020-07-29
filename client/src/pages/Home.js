import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax } from "react-parallax"
import Cards from "../components/Card";


const image1 = "https://www.kildaremedical.com.au/static/uploads/images/nikita-ridgeway-artwork-wffbmrymajsr.jpg?height=1182&mode=crop&upscale=true&width=1536";
const image2 = "https://www.kildaremedical.com.au/static/uploads/images/01-dsc-8995-2-wfiildsvnxsh.jpg?mode=max&upscale=true&width=768";


const inlineStyle = {
    
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate (-50%, -50%)',
    color: " rgb(0, 202, 78)",
}

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Parallax bgImage={image2} strength = {300} style={{borderRadius: 50}} >
            <div style = {{height: 500}}>
            </div>
          </Parallax>
         <br></br>
          <Cards/>
          <br></br>
        <Parallax bgImage={image1} blur={{min: -1, max: 10}} style={{borderRadius: 50}} >
            <div style = {{height: 500}}>
            <div style = {inlineStyle}></div>
            </div>
          </Parallax>
         

        
         
        </Col>
      </Row> 

    
    </Container>
  );
}

export default Home;
