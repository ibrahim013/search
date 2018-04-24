import React from "react";
import extend from "lodash/extend";

const numeral = require('numeral')
const DisplayList = props => {
  const { bemBlocks, result } = props;
  const source = extend({}, result._source, result.highlight);
  return (
    <div
      className={bemBlocks.item().mix(bemBlocks.container("item"))}
      data-qa="hit"
      id="datacontainer"
    >
      <div className={bemBlocks.item("imageUrl")} id="image-view">
        <img
          width={"100%"}
          alt="productimage"
          data-qa="imageUrl"
          src={result._source.imageUrl}
        />
      </div>
      <div className={bemBlocks.item("brand")}>
        <p>
          {result._source.brand}
        </p>
      </div>
      <a href={result._source.url} target="_blank">
        <div
          data-qa="title"
          className={bemBlocks.item("title")}
          dangerouslySetInnerHTML={{ __html: source.title.slice(0, 50) + "..." }}
        />
      </a>
      <div className={bemBlocks.item("price")}>
        <strong className="price">
          <span>
            <del>N</del>
          </span>
          {numeral(result._source.price).format("0,0")}
        </strong>
      </div>
      <div className={bemBlocks.item("site")}>
        <p>
          <span>Seller</span>
          {result._source.site}
        </p>
      </div>
    </div>
  );
};
export default DisplayList;
