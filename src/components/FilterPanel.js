import { Component } from "react";

class FilterPanel extends Component {

  render() {
    return (
      <div className="filter">
        <p className="filter__title">Or filter</p>
        <button className="filter__button">Brazil</button>
        <button className="filter__button">Kenya</button>
        <button className="filter__button">Columbia</button>
      </div>
    );
  }
}

export default FilterPanel;