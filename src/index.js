import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware }  from 'redux'
import rootReducer from './reducers/index'

/**
 * implementation of currying
 * @param  obj { dispatch, getState}
 * @param next  this is the reference to the next middleware if existing or dispatch function
 * @param action
*  @summary logger({ dispatch, getState})(next)(action)
 */
// const logger = function({ dispatch, getState}){
//   return function(next){
//     return function(action){
//       //middlerware code
//       console.log('action type = ', action.type);
//       next(action)
//     }
//   }
// }

/**
 * another way of writing the logger function
 * 
 */
const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log('action type', action.type);
  next(action)
}

const store = createStore(rootReducer, applyMiddleware(logger))
// console.log('before state',store.getState())
// store.dispatch({type: 'ADD_MOVIES', movies:[{name:'superman'}]})
// console.log('store', store);
// console.log('after state',store.getState()); //behind the scenes the reducer is called that returns an empty array as state.

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);