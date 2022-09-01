import { Component } from "react";
import nextId from "react-id-generator";

class FilterPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: ["Brazil", "Kenya", "Columbia"],
      isFilter: "",
    };
  }

  handleClickFilter = (evt) => {
    const filter = evt.target.getAttribute("data-filter");

    if (filter === this.state.isFilter) {
      this.setState({ isFilter: "" });
      this.props.onChangeFilter("");
    } else {
      this.setState({ isFilter: filter });
      this.props.onChangeFilter(filter);
    }
  };

  render() {
    const buttons = this.state.filters.map((button) => {
      const filterBtnClass = `filter__button ${
        this.state.isFilter === button ? "filter__button_active" : ""
      }`;
      let id = nextId();
      return (
        <button
          key={id}
          className={filterBtnClass}
          data-filter={button}
          onClick={this.handleClickFilter}
        >
          {button}
        </button>
      );
    });

    return (
      <div className="filter">
        <p className="filter__title">Or filter</p>
        {buttons}
      </div>
    );
  }
}

export default FilterPanel;
