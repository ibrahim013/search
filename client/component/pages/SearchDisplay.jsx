import React from "react";
import {
  SearchkitManager,
  SearchkitProvider,
  ViewSwitcherHits,
  ActionBarRow,
  HitsStats,
  SearchBox,
  Pagination,
} from "searchkit";
import logo from "../../aserts/logo.jpg";

import DisplayList from "../pages/DisplayList";

const searchkit = new SearchkitManager(
  "https://ash-8817730.us-east-1.bonsaisearch.net/testdata",
  {
    basicAuth: "439h1n43dz:xnv4ee15tv"
  }
);
const HomePage = () => (
  <SearchkitProvider searchkit={searchkit}>
    <div className="ui fluid container">
      <div className="result-header">
        <div className="logo-holder side">
          <img alt="logo" src={logo} />
        </div>
        <div className="searchresult">
          <div className="ui fluid card">
            <SearchBox
              searchOnChange
              queryOptions={{ analyzer: "standard" }}
              queryFields={["title", "type"]}
              placeholder="Search Product or Categories"
              autofocus
            />
          </div>
        </div>
      </div>
      <div>
        <ActionBarRow>
          <div className="result-sta">
            <HitsStats
              translations={{
                "hitstats.results_found": "{hitCount} results found"
              }}
            />
          </div>
        </ActionBarRow>
        <div className="result">
          <ViewSwitcherHits
            hitsPerPage={100}
            highlightFields={["title", "price", "site"]}
            sourceFilter={[
              "title",
              "imageUrl",
              "price",
              "url",
              "site",
              "categories"
            ]}
            hitComponents={[
              {
                key: "grid",
                title: "Grid",
                itemComponent: DisplayList,
                defaultOption: true
              }
            ]}
            scrollTo="body"
          />
          <div className="pagination">
            <Pagination showNumbers />
          </div>
        </div>
      </div>
    </div>
  </SearchkitProvider>
);
export default HomePage;
