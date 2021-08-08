import React, { Component } from 'react'

export default class MovieCard extends Component {
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
            <button className="favourite-btn">Favourite</button>
          </div>
        </div>
      </div>
    )
  }
}
