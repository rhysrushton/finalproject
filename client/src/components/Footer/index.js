import React from 'react'
import "./footer-style.css";
import styled, { css } from 'styled-components'

function Footer(){
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Opening Hours</h4>
                        <br></br>
                        <ul className="list-unstyled">
                            <li>Monday to Friday: 8.00am - 8.00pm</li>
                            <br></br>
                            <li>Saturday & Sunday: 8.00am - 6.00pm</li>
                            <br></br>
                            <li>Public Holidays: as advertised</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact</h4>
                        <br></br>
                        <ul className="list-unstyled">
                        <li><a href="/">Lorem</a></li>
                        <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Information</h4>
                        <br></br>
                        <ul className="list-unstyled">
                        <li><a href="/">Lorem</a></li>
                        <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Legal</h4>
                        <br></br>
                        <ul className="list-unstyled">
                        <li><a href="/">Lorem</a></li>
                        <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                            <br></br>
                            <li><a href="/">Lorem</a></li>
                        </ul>
                    </div>
                </div>
               <div className="footer-bottom"> 
               <p className="text-xs-center">
                &copy; {new Date().getFullYear()} KRMC 

               </p>
               </div> 
            </div>

            </div>

        </FooterContainer>
    )
}
export default Footer; 

const FooterContainer = styled.footer`

.footer-middle {
    padding-top: 3rem; 
    font-family: 'Shadows Into Light', cursive;
    color: rgb(0, 202, 78);
    font-weight: bold ;
    font-size: 20px;
}

.footer-bottom{
    padding-top: 3rem; 
    padding-bottom: 2rem; 

}

`;