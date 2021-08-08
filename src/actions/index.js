//action types
export const ADD_MOVIES = 'ADD_MOVIES'

//action creators
export const addMovies=(data)=>{
  return{
    type:ADD_MOVIES,
    movies: data
  }
}