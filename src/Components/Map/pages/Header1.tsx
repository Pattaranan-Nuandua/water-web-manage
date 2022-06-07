import React, { Component } from "react";
import "../Css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillArrowUpLeftSquareFill, BsFillPencilFill } from "react-icons/bs";

class Header1 extends Component {
  render() {
    return (
      <div className="Main">
        <div className="imglogo">
          <div className="imglogo2">
            <div className="imgimg">
              <BsFillArrowUpLeftSquareFill size="2em" color="white" />
            </div>
            <div className="imgimg">
              <BsFillPencilFill size="2em" color="white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header1;
