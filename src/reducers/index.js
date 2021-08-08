import { ADD_MOVIES,REMOVE_FROM_FAV } from "../actions"
import { ADD_TO_FAV } from '../actions'
const st={
  movies: [],
  favourites:[]
}

export default function movies(state=st, action){
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

