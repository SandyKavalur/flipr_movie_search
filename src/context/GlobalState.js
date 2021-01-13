import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favlist: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieTofavlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_favlist", payload: movie });
  };

  const removeMovieFromfavlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_favlist", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favlist: state.favlist,
        watched: state.watched,
        addMovieTofavlist,
        removeMovieFromfavlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
