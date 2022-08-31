import { Component } from "react";
import logo from "../images/logo-light.svg";

import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <Menu isDark={false} logo={logo}/>
          <h1 className="header__title">Our Coffee</h1>
        </div>
      </header>
    );
  }
}

export default Header;
