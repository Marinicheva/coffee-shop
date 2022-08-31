import { Component } from "react";
import Info from "./Info";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";
import CoffeeList from "./CoffeeList";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Info/>
        <div className="divider_type_line"></div>
        <div className="panels">
          <SearchPanel />
          <FilterPanel />
        </div>
        <CoffeeList />
      </div>
    );
  }
}

export default Main;
