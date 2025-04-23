import React from 'react';

function Searchbar() {
    return(
        <div className="search">
        <h1><em>Let's Find That picture</em></h1>
        <input type ="text" className='searchbar'  placeholder="Search photo!" />
        </div>
    )
}

export default Searchbar;