import {Component} from 'react';
import logo from '../images/logo-dark.svg';

import Divider from './Divider';
import Menu from './Menu';

class Footer extends Component {

  render() {
    return(
      <footer className="footer">
        <Divider />
        <Menu isDark={true} logo={logo}/>
      </footer>
    );
  }
}

export default Footer;