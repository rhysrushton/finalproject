  
import React, { Component } from 'react';
import { HomeOutlined }  from '@ant-design/icons';
import './style.css';

export default class ExampleCss extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper" >
        <div className="nav">
          <HomeOutlined className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
          <div className="nav__body">
                    <a className="navbar-brand" href="/">
                    Home
                    </a>
                <a className="navbar-brand" href="/mission">
                    Our Mission
                </a>
                <a className="navbar-brand" href="/books">
                    Our Team
                </a>
                <a className="navbar-brand" href="/books">
                    Facilities and Services
                </a>
                <a className="navbar-brand" href="/books">
                    Health in the Workplace
                </a>
                <a className="navbar-brand" href="/faq">
                    FAQs
                </a>
             
                <a className="navbar-brand" href="/books">
                    Contact
                </a>

                
          </div>
          
        </div>
            <div className="info">
                <p>Kildare Road Medical Center</p>
                <p> Caring for Our Community</p>
                
            </div>

            <div className="logo">
            <img src="https://www.kildaremedical.com.au/static/uploads/images/krmc-2019-logo-wfajrfakoysa.jpg?mode=max&upscale=true&width=228" alt="KRMC LOGO"></img>

            </div>
      </div>
     
      
    );
  }
}