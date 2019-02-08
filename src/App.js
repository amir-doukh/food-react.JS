import React from 'react';
import navbar from'./composants/navbar';
import { MDBCol,  MDBRow, MDBFooter,, MDBIcon, MDBContainer } from 'mdbreact';
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
      hovered:false,
      
    };

    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  onHover() {
    console.log("ok" )
    //val=style.id= im; 
    const newstyle = {
      transform: 'scale(1.4)',
      //z-index: '5';
      position:'relative',
    };

  }
  onover(){
    console.log("imchi 3ad");
   
   this.setState.hovered=true;
  }
  componentDidMount() {
    this.setState({
      hovered: false
     })
  }
  onout(){
    this.componentDidMount();
    
    console.log(this.setState.hovered);
  }
 
  render() {
    const container = { height: 1300 }
   
    return (
      <div>
            <navbar/>
        <MDBContainer style={container} className="text-center mt-5">
        <MDBRow >
        <MDBCol lg="4" md="4" className="mb-4">
          <img src={burger } alt="burger"   style={this.onHover.newstyle} />
          <figcaption > burger </figcaption>
          </MDBCol>
          <MDBCol lg="4" md="4" className="mb-4">
          <img   src={menu} alt="menu" onMouseOver={this.onHover} onMouseOut={this.componentDidMount}  />
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
