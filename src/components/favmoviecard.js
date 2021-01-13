import React from 'react';
import { FavMovieEdits } from './favmovieedits';

export const FavMovieCard = ({movie, type}) => {
    return(<>
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.poster_path ? (<>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
                
                </>
            ) : (
                <div className="filler-poster"></div>
            )}
            <FavMovieEdits type={type} movie={movie} />
        </div>
        <div className="movie-card desc">
            {`${movie.overview}`}
        </div>
    </>
    );
}; 