import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax } from "react-parallax"
import Jumbotron from "../components/Jumbotron";

const image1 = "https://www.kildaremedical.com.au/static/uploads/images/nikita-ridgeway-artwork-wffbmrymajsr.jpg?height=1182&mode=crop&upscale=true&width=1536";
const image2 = "https://www.kildaremedical.com.au/static/uploads/images/01-dsc-8995-2-wfiildsvnxsh.jpg?mode=max&upscale=true&width=768";
const image3 = "https://niegroup.com.au/wp-content/uploads/kd-med-01.jpg"

const inlineStyle = {
    background: "#ffff",
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate (-50%, -50%)'


}

function Home() {
  return (
    <Container fluid>
      <Jumbotron/>
      <Row>
        <Col size="md-12">

        <Parallax bgImage={image2} blur={{min: -1, max: 20}} >
            <div style = {{height: 500}}>
            <div style = {inlineStyle}>Blurrrr</div>
            </div>
          </Parallax>

          <h1>| | | | </h1>
          <Parallax bgImage={image1} strength = {500} >
            <div style = {{height: 500}}>
            <div style = {inlineStyle}>HTML TEXT</div>
            </div>
          </Parallax>
          <h1>| | | | </h1>

     

          <Parallax bgImage={image1} strength={-200} >
            <div style = {{height: 500}}>
            <div style = {inlineStyle}>Reverse</div>
            </div>
          </Parallax>

          <h1>| | | | </h1>

        <Parallax 
        bgImage={image3} 
        strength={200} 
        renderLayer={percentage =>(
            <div
              style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `rgba(255,123, 23, ${percentage * 1} `,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${percentage * 5})`,
              }}
            
            >

            </div>

        )}
        
        >
          <div style = {{height: 500}}>
          <div style = {inlineStyle}>Render</div>
          </div>
        </Parallax>





          <div style={{height: "100vh"}}></div>
        </Col>
      </Row> 
    </Container>
   
    
  );
}

export default Home;
