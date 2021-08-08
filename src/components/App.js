import {data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addMovies } from '../actions';
class App extends React.Component {

  componentDidMount(){
    //make api call
    //dispatch action
    const { store } = this.props

    const unsubscribe = store.subscribe(()=>{
      console.log('updated state')
      this.forceUpdate()
    });
    //call unsubscribe() to unsubscribe

    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies:data
    // })

    store.dispatch(addMovies(data))
     console.log('state',store.getState())
  }

  render(){
    const {store } = this.props
    const  {movies} = store.getState()
    console.log('updated state',store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Fav</div>
          </div>
          <div className="list">
            {movies.map(item=>{
              return <MovieCard movie={item} store={store}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
