import React from "react";
import {
  SearchkitManager,
  SearchkitProvider,
  ViewSwitcherHits,
  ActionBarRow,
  HitsStats,
  HierarchicalMenuFilter,
  RefinementListFilter,
  SearchBox,
  Pagination,
  SideBar,
  CheckboxFilter,
  TermQuery
} from "searchkit";
import logo from "../../aserts/logo.jpg";

import DisplayList from "../pages/DisplayList";
import Filter from "../pages/Filter";
import SelectedFilter from "../pages/SelectedFilter"

const searchkit = new SearchkitManager(
  process.env.CLUSTER_URL,
    {
      basicAuth: process.env.BASIC_AUTH
    }
  );
  const InitialLoaderComponent = () => (
    <div>
      Loading please wait...
    </div>
  )
const HomePage = () => (
  <SearchkitProvider searchkit={searchkit}>
    <div className="container">
      <div className="result-header">
        <div className="logo-holder side">
          <img alt="logo" src={logo} />
        </div>
        <div className="searchresult">
          <div className="ui fluid card">
            <SearchBox
              searchOnChange
              queryOptions={{ analyzer: "standard" }}
              queryFields={["title", "type", "brand"]}
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
          <SelectedFilter/>
        </ActionBarRow>
        <div className="result">
        <SideBar>
          <Filter />
        </SideBar>
          <div className="hitvalue">
            <ViewSwitcherHits
              hitsPerPage={100}
              highlightFields={["title", "price", "type", "brand"]}
              sourceFilter={[
                "title",
                "imageUrl",
                "price",
                "url",
                "site",
                "type",
                "brand",
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
    </div>
  </SearchkitProvider>
);
export default HomePage;
