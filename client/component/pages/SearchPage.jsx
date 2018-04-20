import React from "react";
import { Redirect } from "react-router-dom";
import { SearchBox, SearchkitComponent } from "searchkit";
import isEmpty from "lodash/isEmpty";

class SearchPage extends SearchkitComponent {
  render() {
    const searchDataRaw = this.context.searchkit.state;
    const searchData = Object.values(searchDataRaw);
    if (isEmpty(searchDataRaw)) {
      return (
        <div>
          <SearchBox
            queryOptions={{ analyzer: "standard" }}
            queryFields={["title", "type"]}
            placeholder="Search Product or Categories"
            searchOnChange={false}
            autofocus
          />
        </div>
      );
    }
    return <Redirect to={`/search?q=${searchData}`} />;
  }
}
export default SearchPage;
