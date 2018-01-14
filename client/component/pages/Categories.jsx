import React from "react";
import Data from "../../data/categories.json";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data
    };
  }
  render() {
    const { Data } = this.state;
    const categories = Data.map(data => (
      <div className="ui card raised">
        <div className="ui content">{data}</div>
      </div>
    ));
    return <div className="ui cards display-data">{categories}</div>;
  }
}
export default Categories;
