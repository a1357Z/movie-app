import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore }  from 'redux'
import rootReducer from './reducers/index'


const store = createStore(rootReducer)
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