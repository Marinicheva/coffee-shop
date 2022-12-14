import { Component } from "react";
import Info from "./Info";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";
import CoffeeList from "./CoffeeList";

class Main extends Component {

  render() {
    const {data, onUpdateSearchRequest, onChangeFilter} = this.props;
    return (
      <div className="container">
        <Info />
        <div className="divider_type_line"></div>
        <div className="panels">
          <SearchPanel onUpdateSearchRequest={onUpdateSearchRequest} />
          <FilterPanel onChangeFilter={onChangeFilter}
        />
        </div>
        <CoffeeList data={data}/>
      </div>
    );
  }
}

export default Main;
