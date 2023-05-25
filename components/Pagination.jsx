import React from "react";

import _ from "lodash";

const perPage = 10;


const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {

    const pageCount = totalItems / pageSize;
    if(Math.ceil(pageCount) === 1) return null;

    return (
      <nav aria-label="...">
          <ul className="pagination pagination-lg">
              <li className="page-prev">
                  <a href="" className="page-link" tableindex="-1">
                      Previous
                  </a>
              </li>
              {Array(Math.ceil(totalItems / perPage)).fill(0).map((_, index) => (
                <li key={index} className={currentPage === index + 1 ? 'page-item active' : 'page-item'}>
                  <a href="" className="page-link" onClick={() => onPageChange(index + 1)}>
                      {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-next">
                  <a href="" className="page-link" tableindex="-1">
                      Next
                  </a>
              </li>
          </ul>
      </nav>
    )
  };
  
  export default Pagination
  