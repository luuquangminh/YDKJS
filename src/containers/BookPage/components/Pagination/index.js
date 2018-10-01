import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Pagination = ({
  maxIndex,
  currentIdex,
  maxSize = 10,
  limitDisplay = 6,
  onStartIndexChange
}) => {
  const clipSize = limitDisplay - 1;
  const maxPage = Math.ceil(maxIndex / maxSize);
  console.log("gfgfg", maxPage);
  console.log("maxIndex", maxIndex);

  const currentPage = Math.ceil(currentIdex / maxSize);
  console.log("currentPage", currentPage);
  let startDisplayPage = Math.floor(currentPage / clipSize) * clipSize + 1;

  let endDisplayPage = startDisplayPage + clipSize - 1;
  endDisplayPage = endDisplayPage >= maxPage ? maxPage : endDisplayPage;
  let nextClipPage = endDisplayPage + 1;
  nextClipPage = nextClipPage < maxPage ? nextClipPage : -1;

  const tmp = Array.from({ length: clipSize }, (v, k) => k + startDisplayPage);
  const pages =
    maxPage > 0 ? [...tmp, nextClipPage, maxPage].filter(e => e > 0) : [];
  return (
    <div className="Pagination">
      {pages.map(page => {
        return (
          <span
            key={page}
            className={`page ${page - 1 == currentPage ? " active" : ""}`}
            onClick={() => onStartIndexChange((page - 1) * maxSize)}
          >
            {page === nextClipPage ? ">>" : page}
          </span>
        );
      })}
    </div>
  );
};
export default Pagination;
