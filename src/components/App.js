import { Component } from "react";
import { coffee } from "../utils/data";

import Header from "./Header";
import Main from './Main';
import Footer from "./Footer";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: coffee,
      term: '',
      filter: ''
    }
  }

  onSearchItem = (data, term) => {
    if (term.length === 0) {
      return data;
    }

    return data.filter(item => item.name.toLowerCase().indexOf(term) > - 1);
  }

  onFilterItem = (data) => {
    if (!this.state.filter) {
      return data;
    }

    return data.filter(item => item.country === this.state.filter);
  }

  onUpdateSearchRequest = (term) => {
    this.setState({term});
  }

  onChangeFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term} = this.state;
    const visibleData = this.onFilterItem(this.onSearchItem(data, term));


    return (
      <div className="page">
        <Header />
        <Main 
          data={visibleData}
          onUpdateSearchRequest={this.onUpdateSearchRequest}
          onChangeFilter={this.onChangeFilter}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
