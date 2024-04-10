import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { IoMdLaptop } from "react-icons/io";

function Header() {
  return (
    <MDBNavbar light bgColor="black">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" className="text-light fs-1">
          <IoMdLaptop className="text-light mx-3" />
          PROJECT FAIR
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
