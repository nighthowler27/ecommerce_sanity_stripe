import React from 'react';

import ReactPaginate from 'react-paginate';

const Login_Register = App;

    function App () {
        const handlePageClick = (data) => {
            console.log(data.selected);
        }
        return (
            <div>
    
            <ReactPaginate 
                previousLabel = {'prev'}
                nextLabel = {'next'}
                breakLabel = {'.....'}
                pageCount={30}
                marginPagesDisplayed={4}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
            />
            
              </div>
        )
    }

export default App;