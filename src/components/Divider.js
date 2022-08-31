import { Component } from "react";
import coffeeDevider from '../images/info-divider.svg';

class Divider extends Component {
  render() {
    return <img className="devider" src={coffeeDevider} alt="" />
  }
}

export default Divider;