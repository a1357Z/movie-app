import { ADD_MOVIES,REMOVE_FROM_FAV } from "../actions"
import { ADD_TO_FAV } from '../actions'
import { combineReducers } from 'redux';
const st={
  movies: [],
  favourites:[]
}

export function movies(state=st, action){
switch (action.type) {
  case ADD_MOVIES:
    return {...state,movies:action.movies}
  case ADD_TO_FAV:  
    let fav = [...state.favourites, action.favourites]
    return {...state, favourites:fav}
  case REMOVE_FROM_FAV:
    let f = [...state.favourites]
    let index = f.indexOf(action.favourites)
    f.splice(index,1)
    console.log('favs are',f);
    return{
        ...state, favourites:f
      }
  default:
    return state
}

}

const initialSearchState = { result: { }}
export function search( state = initialSearchState, action){
return ({
  result: {}
})
}

//combining reducers with combineReducers
// export default rootReducer = combineReducers({
//   moviesReducer,
//   searchReducer
// })

//combining without combineReducers
const initialRootReducerState = { 
  movies: { movies:[], favourites: []},
  search: { result: { } }
}
export default function rootReducer(state = initialRootReducerState, action){
  return({
    movies: movies(state.movies, action),
    search: search(state.search, action)
  })
}
