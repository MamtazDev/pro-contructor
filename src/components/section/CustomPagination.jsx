import React, { useState } from "react";

const CustomPagination = ({ totalProducts, productsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="mbp_pagination text-center mt30">
      <ul className="page_navigation">
        <li className="page-item">
          <a className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <span className="fas fa-angle-left" />
          </a>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} aria-current="page">
            <a className="page-link" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
              {currentPage === index + 1 && <span className="sr-only">(current)</span>}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <span className="fas fa-angle-right" />
          </a>
        </li>
      </ul>
      <p className="mt10 mb-0 pagination_page_count text-center">
        {((currentPage - 1) * productsPerPage) + 1} – {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} products available
      </p>
    </div>
  );
};

export default CustomPagination;
