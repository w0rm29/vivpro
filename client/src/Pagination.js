import React from 'react';

const Pagination = ({ totalRows, rowsPerPage, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <nav className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
                Prev
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    style={{
                        fontWeight: currentPage === number ? 'bold' : 'normal',
                        color: currentPage === number ? 'blue' : 'black',
                    }}
                    aria-label={`Page ${number}`}
                >
                    {number}
                </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
            </button>
        </nav>
    );
};

export default Pagination;
