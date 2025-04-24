import React, {useState} from 'react';

function Searchbar({onSearch, onCategoryChange, onUpload}) {
    const [searchTerm, setSearchTerm] =useState(" ");

    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (onSearch) {
            onSearch(term); 
        }
    };   

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if (onCategoryChange) {
            onCategoryChange(category); 
        }
    };

    const handleUploadClick = () => {
        if (onUpload) {
            onUpload(); 
        }
    };

    return(
        <div className="search">
        <h1><em>Let's Find That picture!</em></h1>
        <input type ="text" className='searchbar'  placeholder="Search photo" value={searchTerm} onChange={handleInputChange} />
        <select className="genre-filter" value={selectedCategory}  onChange={handleCategoryChange}>
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