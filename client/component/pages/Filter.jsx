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
            <RefinementListFilter id="brand" title="Brand" field="brand.raw" operator="AND" />
        </div>
        <div>
            <RefinementListFilter id="site" title="Found on" field="site.raw" operator="AND" />
        </div>
    </div>
      )
    }
  }
  export default Filter;