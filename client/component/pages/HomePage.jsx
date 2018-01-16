import React from "react";
import { SearchkitManager, SearchkitProvider } from "searchkit";
import SearchPage from "../pages/SearchPage";

const searchkit = new SearchkitManager("https://ash-8817730.us-east-1.bonsaisearch.net/pricetable",{
  basicAuth:"read:teetndhjnrspbzxxyfxmf5fb24suqxuj"
})
;
const HomePage = () => (
  <SearchkitProvider searchkit={searchkit}>
    <div className="search-contanier">
      <SearchPage />
    </div> 
           
  </SearchkitProvider>
);
export default HomePage;
