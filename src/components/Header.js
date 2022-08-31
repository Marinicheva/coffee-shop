import { Component } from "react";
import logo from "../images/coffee-beans.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__menu">
            <img className="header__logo" src={logo} />
            <nav>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a className="header__menu-link" href="#">
                    Our coffee
                  </a>
                </li>
                <li className="header__menu-item">
                  <a className="header__menu-link" href="#">
                    For your pleasure
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <h1 className="header__title">Our Coffee</h1>
        </div>
      </header>
    );
  }
}

export default Header;
