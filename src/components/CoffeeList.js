import { Component } from "react";
import nextId from "react-id-generator";
import CoffeeCard from './CoffeeCard';

import { coffee } from '../utils/data';

class CoffeeList extends Component {

  render() {
    return (
      <ul className="coffee">
        {
          coffee.map(item => {
            let id = nextId();
            return <CoffeeCard key={id} {...item} />
          })
        }
      </ul>
    );

  }

};

export default CoffeeList;