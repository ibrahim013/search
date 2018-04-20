import React from "react";
import { SearchkitManager, SearchkitProvider } from "searchkit";
import SearchPage from "../pages/SearchPage";

const searchkit = new SearchkitManager(
  process.env.CLUSTER_URL,
    {
      basicAuth: process.env.BASIC_AUTH
    }
  );
const HomePage = () => (
  <SearchkitProvider searchkit={searchkit}>
    <div className="search-contanier">
      <SearchPage />
    </div> 
           
  </SearchkitProvider>
);
export default HomePage;
