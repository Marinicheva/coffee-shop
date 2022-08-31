import { Component } from "react";

class SearchPanel extends Component {
  render() {
    return (
      <form className="search" action="#">
        <label className="search__label" htmlFor="search">Looking for</label>
        <input className="search__input" type="text" name="search" id="search" placeholder="start typing here..." />
      </form>
    );
  }
}

export default SearchPanel;