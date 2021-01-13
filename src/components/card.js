import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Card = ({movie}) => {
    const visit = (obj, fn) => {
        const values = Object.values(obj)
    
        values.forEach(val => 
            val && typeof val === "object" ? visit(val, fn) : fn(val))
    }
    const print = (val) => console.log(val)
    visit(movie, print)

    const {favlist, addMovieTofavlist} = useContext(GlobalContext);
    const storedMovie = favlist.find(o => o.id === movie.id);
    const favlistDisabled = storedMovie ? true : false;

    return(
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date"> 
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>
                <div className="controls">
                    <button className="btn"
                        disabled={favlistDisabled}
                        onClick={()=> addMovieTofavlist(movie)}
                    >Add to favourites</button>
                </div>  
            </div>
        </div>
    );
};