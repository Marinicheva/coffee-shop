import { Component } from "react";

class Menu extends Component {

  render() {
    const { isDark, logo } = this.props;
    const menuClassName = `menu ${ isDark ? 'menu_theme_dark' : ''}`;
    return (
      <div className={menuClassName}>
        <img className="menu__logo" src={logo} alt="Logo" />
        <nav>
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="https://yandex.ru/" target="blank">
                Our coffee
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="https://yandex.ru/" target="blank">
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
