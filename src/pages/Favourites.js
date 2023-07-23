import React from 'react'
import {useAppContext} from "../utils/AppContext"
import "../assets/Favourites.css"
import Header from "./Header.js"
const Favourites = () => {
    const{favourites,addToFavourites,removeFromFavourites}=useAppContext();
    console.log("favourites are",favourites);

    const favouritesChecker =(id) =>{
         const boolean=favourites.some((value)=> value.id === id);
         return boolean;
    }
  return (
    <div>
        <Header/>
        
    <div className="templateContainer">
        <div className="template_Container">
        {favourites.length > 0 ? favourites.map((value) => (
                            <div>
                                
                            <div className="template" key={value.id}>
                                <a href={value.page}>
                                <img src={value.image} alt="" />
                                </a>
                                <h3>{value.title}</h3>
                                <div>
                                    {favouritesChecker(value.id)?(
                                        <button className="button" onClick={()=>removeFromFavourites(value.id)}>Remove from Favourites</button>

                                    ):(
                                        <button className="button" onClick={()=>addToFavourites(value)}>Add to Favourites</button>

                                    ) }
                                    </div>
                            </div>
                            </div>
                        
                    )): <h1 className="h">You don't have any favourites yet!</h1>
                }
            
        </div>
    </div>
    </div>
  )
}

export default Favourites