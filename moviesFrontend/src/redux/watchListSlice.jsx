import { createSlice } from "@reduxjs/toolkit";

const getMovies = JSON.parse(localStorage.getItem("movieWatchList"));

const initialState = {
  movies: getMovies ? getMovies : [],
};

const watchListSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
      localStorage.setItem("movieWatchList", JSON.stringify(state.movies));
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbId !== action.payload.id
      );
      localStorage.setItem("movieWatchList", JSON.stringify(state.movies));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = watchListSlice.actions;

export default watchListSlice.reducer;
