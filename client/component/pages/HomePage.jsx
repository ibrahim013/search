import React from "react";
import { SearchkitManager, SearchkitProvider, TopBar, Layout } from "searchkit";
import SearchPage from "../pages/SearchPage";

const searchkit = new SearchkitManager("http://localhost:9200/pricetable");
const HomePage = () => (
  <SearchkitProvider searchkit={searchkit}>
    <div>
      <Layout>
        <TopBar>
          <SearchPage />
        </TopBar>
      </Layout>
    </div>
  </SearchkitProvider>
);
export default HomePage;
