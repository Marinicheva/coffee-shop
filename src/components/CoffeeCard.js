import { Component } from "react";

class CoffeeClass extends Component {

  render() {
    const {name, weight, image, country, price} = this.props;
    return (
      <li className="coffee__item">
        <img src={image} alt="" className="coffee__img" />
        <p className="coffee__text">{name} {weight}</p>
        <p className="coffee__text">{country}</p>
        <p className="coffee__text coffee__price">{price}$</p>
      </li>
    );
  }
}

export default CoffeeClass;