import React from "react";
import "../component css/Favourites.css"
import NavBar from "./NavBar";


function Favourites({favorites, onRemove}) {
    return(
        <section>
            <div className="Navbar"><NavBar/></div>
            <div className="favourites-header">
                <h2>Favourites ({ favorites.length })</h2>
            </div>
            <div className="favourites-container">
             <div className="favourites-grid">
                {favorites.map((image) => (
                    <div key={image.id} className="favourite-item">
                     <img src={image.url} alt={image.title} />
                        <button   className="remove-btn" onClick={() => onRemove(image)}> Remove
                        </button>
                    </div>
                    ))}
                </div>
            </div>
       </section>
     )
}

export default Favourites