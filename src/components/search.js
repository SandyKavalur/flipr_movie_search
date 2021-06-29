import React, {useState} from 'react';
import {Card} from './card';

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const Change = e => {
        e.preventDefault();
        
        setQuery(e.target.value);
        setTimeout(()=> fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=32319e73af6b201b54f1f7fa47dcece6&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        ), 2000).then((res) => res.json())
        .then((data) => {
            if(!data.errors){
                
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
        
    };

    return(
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Search for Movies:" 
                            value={query}
                            onChange={Change}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <Card movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};