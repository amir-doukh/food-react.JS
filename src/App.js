import React from 'react';
import { MDBBtn ,MDBAnimation  ,MDBCol,  MDBRow, MDBFooter,MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import cola from './img/cola.png';
import breakfast from './img/breakfast.png';
import burger from './img/burger.png';
import frite from './img/frite.png';
import glace from './img/glace.png';
import menu from './img/menu.png';

class Burgeramir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  onHover() {
    console.log("ok")
    this.setState();
}
  render() {
    const container = { height: 1300 }
   
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="warning-color-dark"  className="order-12" dark expand="md">
               <MDBNavLink to="/">
      </MDBNavLink>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav id="bar" left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">MENU</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">LOCATIOR</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">DELIVERY</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">OFFERS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">NEW PRODUCTS</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">CONTACT US</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram " /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
        <MDBContainer style={container} className="text-center mt-5">
        <MDBRow >
        <MDBCol lg="4" md="4" className="mb-4">
        <MDBAnimation type="bounce" infinite>
          <img src={burger } alt="burger" onMouseOver={this.onHover}  />
          </MDBAnimation>
          <figcaption > burger </figcaption>
          </MDBCol>
          <MDBCol lg="4" md="4" className="mb-4">
          <img  id ="im" src={menu} alt="menu" onMouseOver={this.onHover} />
          <figcaption > menu </figcaption>
          </MDBCol>
          <MDBCol  lg="4" md="4" className="mb-4">
            <img src={frite} alt=" "  />
            <figcaption > frite </figcaption>
          </MDBCol>
        </MDBRow>
        <MDBRow >
        <MDBCol lg="4" md="4" className="mb-4">
          <img src={breakfast} alt="breakfast"  />
          <figcaption > breakfast </figcaption>
          </MDBCol>
          <MDBCol lg="4" md="4" className="mb-4">
          <img src={glace}  alt="" />
          <figcaption > glace </figcaption>
          </MDBCol>
          <MDBCol  lg="4" md="4" className="mb-4">
            <img src={cola}  alt="" />
            <figcaption > cola </figcaption>
          </MDBCol>
        </MDBRow>
          
          
        </MDBContainer>
        <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h2 id="titre">BURGER AMIR</h2>
            <p>
            TM & Copyright 2018 Burger Amir Corporation. All Rights Reserved.
            </p>
          </MDBCol>
          <MDBCol md="6">
          <h4 id="share">SHARE THIS WEBSITE</h4>
          <a href="https://www.facebook.com/amir.do" className="fb-ic mr-3">
          <MDBIcon fab icon="facebook-f"  />
        </a>
        <a href="https://www.linkedin.com/in/amir-doukh-b02a05128/" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
        </a>
        <a href="https://www.instagram.com" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.amir.doukh.com"> AMIR DOUKH </a>
        </MDBContainer>
      </div>
    </MDBFooter>
      </div>
    );
  }
}

export default Burgeramir;
