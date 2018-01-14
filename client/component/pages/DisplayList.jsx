import React from "react";
import extend from "lodash/extend";

const DisplayList = props => {
  const { bemBlocks, result } = props;
  const source = extend({}, result._source, result.highlight);
  return (
    <div
      className={bemBlocks.item().mix(bemBlocks.container("item"))}
      data-qa="hit"
    >
      <div className={bemBlocks.item("imageUrl")}>
        <img
          alt="productimage"
          data-qa="imageUrl"
          src={result._source.imageUrl}
        />
      </div>
      <a href={result._source.url} target="_blank">
        <div
          data-qa="categories"
          className={bemBlocks.item("title")}
          dangerouslySetInnerHTML={{ __html: source.title }}
        />
      </a>
      <div className={bemBlocks.item("price")}>
        <strong className="price">
          <span>
            <del>N</del>
          </span>
          {result._source.price}
        </strong>
      </div>
      <div className={bemBlocks.item("site")}>
        <p>
          <span>Found on </span>
          {result._source.site}
        </p>
      </div>
    </div>
  );
};
export default DisplayList;
