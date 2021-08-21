import React, { Component } from 'react'
import { addToFavourite, removeFromFavourite } from '../actions'
import { connect } from '../index'
class MovieCard extends Component {

  addToFav=(movie)=>{
    const { dispatch } = this.props
    dispatch(addToFavourite(movie))
  }

  removeFromFav=(movie)=>{
    const { dispatch } = this.props
    dispatch(removeFromFavourite(movie))
  }

  render() {
    const { movie, isFavourite } = this.props
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
            {!isFavourite && 
              <button className="favourite-btn" onClick={()=>this.addToFav(movie)}>Favourite</button>
            }
            {
              isFavourite &&
              <button className="unfavourite-btn" onClick={()=>this.removeFromFav(movie)}>unFavourite</button>
            }
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    movies: state.movies,
    search: state.search
  }
}


const connectedMovieComponent = connect(mapStateToProps)(MovieCard)
 export default connectedMovieComponent;