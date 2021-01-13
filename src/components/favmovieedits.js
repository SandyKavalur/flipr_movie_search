import React, { useContext } from 'react';
import {GlobalContext} from "../context/GlobalState";

export const FavMovieEdits = ({movie, type}) => {
    const {removeMovieFromfavlist} = useContext(GlobalContext);
    return(
        <div className="inner-card-controls">
            {type === 'favlist' && (
                <button className="ctrl-btn"
                    onClick={()=> removeMovieFromfavlist(movie.id)}
                >X</button>
            )}
        </div>
    );
};