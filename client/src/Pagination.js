import React from 'react';

const Pagination = ({ totalRows, rowsPerPage, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            {pageNumbers.map(number => (
                <button key={number} onClick={() => setCurrentPage(number)}>
                    {number}
                </button>
            ))}
        </nav>
    );
};

export default Pagination;
