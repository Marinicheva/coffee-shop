import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  handleChange = (e) => {
    const term = e.target.value;

    this.setState({term});
    this.props.onUpdateSearchRequest(term);
  }


  render() {
    return (
      <form className="search" action="#">
        <label className="search__label" htmlFor="search">Looking for</label>
        <input 
          className="search__input"
          type="text"
          name="search"
          id="search"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchPanel;