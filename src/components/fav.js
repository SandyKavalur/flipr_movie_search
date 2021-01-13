import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { FavMovieCard } from './favmoviecard';

export const Fav = () => {
    const {favlist} = useContext(GlobalContext);

    return(
        <div className="mavie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading"><u>My favlist</u></h1>
                </div>
                {favlist.length > 0 ? (
                    <div className="movie-grid">
                        {favlist.map(movie => (
                            <FavMovieCard key={movie.id} movie={movie} type="favlist" />
                        ))}
                    </div>
                ): (
                    <h2 className="no-movies">No movies</h2>
                )}
                
            </div>
        </div>
    );
};