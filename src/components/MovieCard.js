import React, { Component } from 'react'
import { addToFavourite, removeFromFavourite } from '../actions'
export default class MovieCard extends Component {
  constructor(props){
    super(props)
    this.state={
      isFavourite:false
    }
  }

  addToFav=(movie)=>{
    const { store } = this.props
    store.dispatch(addToFavourite(movie))
    this.setState({
      isFavourite:true
    })
  }

  removeFromFav=(movie)=>{
    const { store } = this.props
    store.dispatch(removeFromFavourite(movie))
    this.setState({
      isFavourite:false
    })
  }

  render() {
    const { movie } = this.props
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="poster"/>
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="title">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {!this.state.isFavourite && 
              <button className="favourite-btn" onClick={()=>this.addToFav(movie)}>Favourite</button>
            }
            {
              this.state.isFavourite &&
              <button className="unfavourite-btn" onClick={()=>this.removeFromFav(movie)}>unFavourite</button>
            }
            
          </div>
        </div>
      </div>
    )
  }
}
