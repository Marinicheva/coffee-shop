import { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { isDark, logo } = this.props;
    const menuClassName = `menu ${ isDark ? 'menu_theme_dark' : ''}`;
    return (
      <div className={menuClassName}>
        <img className="menu__logo" src={logo} />
        <nav>
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Our coffee
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                For your pleasure
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
