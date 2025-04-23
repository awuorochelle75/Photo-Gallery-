import React from 'react';

function Searchbar() {
    return(
        <div className="search">
        <h1><em>Let's Find That picture!</em></h1>
        <input type ="text" className='searchbar'  placeholder="Search photo" />
        <select className="genre-filter">
    <option value="all">All Categories</option>
    <option value="nature">Nature</option>
    <option value="landscape">Landscape</option>
    <option value="portrait">Portrait</option>
    <option value="architecture">Architecture</option>
    <option value="street">Street Photography</option>
    <option value="abstract">Abstract</option>
    <option value="black-and-white">Black & White</option>
    <option value="wildlife">Wildlife</option>
    <option value="travel">Travel</option>
    <option value="fashion">Fashion</option>
    <option value="food">Food Photography</option>
    <option value="events">Events</option>
</select>

        </div>
    )
}

export default Searchbar;