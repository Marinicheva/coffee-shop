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
    }
  }

  onSearchItem = (data, term) => {
    if (term.length === 0) {
      return data;
    }

    return data.filter(item => item.name.toLowerCase().indexOf(term) > - 1);
  }

  onUpdateSearchRequest = (term) => {
    this.setState({term});
  }

  render() {
    const {data, term} = this.state;
    const visibleData = this.onSearchItem(data, term);


    return (
      <div className="page">
        <Header />
        <Main 
          data={visibleData}
          onUpdateSearchRequest={this.onUpdateSearchRequest}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
