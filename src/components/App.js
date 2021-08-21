import {data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React,{ Component } from 'react';
import { addMovies } from '../actions';
import { StoreContext } from '../index'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'movies'
    }
  }
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
    const  {movies:{movies, favourites}} = store.getState()
    const { selectedTab } = this.state
    const list = this.state.selectedTab === 'movies' ? movies : favourites
    console.log('updated state',store.getState());

    return(
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${ selectedTab === 'movies' ? 'active-tabs' : null }`} onClick={()=>this.setState({selectedTab:'movies'})}>Movies</div>
            <div className={`tab ${ selectedTab === 'movies' ? null : 'active-tabs'  }`} onClick={()=>this.setState({selectedTab:'favourites'})}>Fav</div>
          </div>
          <div className="list">   
            {
              list.map((item,index)=>{
              let isFav = favourites.indexOf(item)!== -1
              return <MovieCard 
                movie={item}
                store={store}
                key={index}
                isFavourite={isFav}
              />
            })
            }
            {list.length === 0 ? <div className="no-movies">no movies to display</div>: null}
          </div>
        </div>
      </div>
    );


    
  }
  
}


class AppWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return <App store = {store}/>
        }}
      </StoreContext.Consumer>
    )
  }
}


export default AppWrapper;
