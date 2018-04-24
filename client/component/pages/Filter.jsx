import React from "react";
import {
    RefinementListFilter,
    SearchkitComponent
  } from "searchkit";
  
  class Filter extends SearchkitComponent {
  
   render(){
     return (
    <div>
        <div>
            <RefinementListFilter id="type" title="Type" field="type.raw" operator="AND" />
        </div>
        <div>
            <RefinementListFilter id="brand" title="Brand" field="brand.raw" operator="AND" />
        </div>
        <div>
            <RefinementListFilter id="site" title="Seller" field="site.raw" operator="AND" />
        </div>
    </div>
      )
    }
  }
  export default Filter;