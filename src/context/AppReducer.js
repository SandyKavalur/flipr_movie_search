export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_favlist":
            return {
            ...state,
            favlist: [action.payload, ...state.favlist],
            };
        case "REMOVE_MOVIE_FROM_favlist":
            return {
            ...state,
            favlist: state.favlist.filter(
                (movie) => movie.id !== action.payload
            ),
            };
        default:
            return state;
    }
};
  