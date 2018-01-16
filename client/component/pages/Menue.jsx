import React from "react";
import { ItemList, MenuFilter } from "searchkit";


const Menue = () => (
    <div>
    <MenuFilter
      field="languages.raw"
      title="Languages"
      id="languages"
      listComponent={ItemList}/>
  </div>
);
export default Menue;
