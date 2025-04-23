import React,  { useState, useEffect} from "react";


function Favourites({photo}) {
 const [favourite, setfavourite] = useState

 useEffect(() => {
    const setFavourite = JSON.parse(localStorage.getItem('favourites') || '[]')
    setfavourite(savedfavourite) 
 }, []) 

    const removeFavourite = 0

    return(
        <section>
            <div className="favourites-header">
                <h2>Favourites</h2>
            </div>
            <div className="favourites-container">
                <ul></ul>
            </div>
        </section>
     )
}

export default Favourites