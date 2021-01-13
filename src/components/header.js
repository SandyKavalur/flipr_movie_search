import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Movie Wishlist</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/fav"> Favourites </Link>
                        </li>
                        <li>
                            <Link to="/" className="btn"> Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};