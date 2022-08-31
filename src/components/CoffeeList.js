import { Component } from "react";
import nextId from "react-id-generator";
import CoffeeCard from './CoffeeCard';

class CoffeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="coffee">
        {
          this.props.data.map(item => {
            let id = nextId();
            return <CoffeeCard key={id} {...item} />
          })
        }
      </ul>
    );

  }

};

export default CoffeeList;