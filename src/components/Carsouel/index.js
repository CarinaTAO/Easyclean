import React, { PureComponent } from "react";
import Carousel from "./Carsouel";
import Background1 from "../../assets/img/home-bg.jpg";
import logo from "../../assets/img/c.jpg"


class Lunbo extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Carousel width={720} height={455}>
        <li>
          <a href=" ">
            <img src={logo} alt="" />
          </a>
        </li>
        <li>
          <a href=" ">
            <img src={logo} alt="" />
          </a>
        </li>
        <li>
          <a href=" ">
            <img src={logo} alt="" />
          </a>
        </li>
      </Carousel>
    );
  }
}


export default Lunbo;
