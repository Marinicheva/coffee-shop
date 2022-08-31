import { Component } from "react";
import img from '../images/our-coffee-img.jpg';

import Divider from './Divider';


class Info extends Component {
  render() {
    return (
      <section className="info">
        <img className="info__img" src={img} alt="Girl drinks coffee" />
        <div className="info__text-container">
          <h2 className="info__title">About our beans</h2>
          <Divider />
          <p className="info__paragraph">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className="info__paragraph">
            Afraid at highly months do things on at. Situation recommend
            objection do intention <br /> so questions. <br /> As greatly removed calling
            pleased improve an. Last ask him cold feel <br /> met spot shy want.
            Children me laughing we prospect answered followed. At it went <br /> is
            song that held help face.
          </p>
        </div>
      </section>
    );
  }
}

export default Info;
