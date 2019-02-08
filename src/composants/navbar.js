import React, { Component } from 'react'
import {MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
 class navbar extends Component {
  render() {
    return (
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
    )
  }
}
export default navbar;
