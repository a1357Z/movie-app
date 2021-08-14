import movies from "../reducers"
import axios from 'axios'
//action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const SEARCH_MOVIE = 'SEARCH_MOVIE'
//action creators
export const addMovies=(data)=>{
  return{
    type:ADD_MOVIES,
    movies: data
  }
}

export const addToFavourite=(movie)=>{
  return{
    type: ADD_TO_FAV,
    favourites: movie
  }
}

export const removeFromFavourite=(movie)=>{
  return{
    type: REMOVE_FROM_FAV,
    favourites: movie
  }
}

export const searchMovie=(title)=>{
  return async dispatch => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=548f174d&t=${title}`)
    dispatch({
      type: SEARCH_MOVIE,
      result: res
    })
  }
}