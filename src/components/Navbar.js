import React, { Component } from 'react'
import { searchMovie } from '../actions'
import { StoreContext, connect} from '../index'
class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={
      searchText:'',
      showSearchResults: false
    }
  }
  handleSearch=()=>{
    //search and update showSearchResults
    const { searchText } = this.state
    const { dispatch } = this.props
    dispatch(searchMovie(searchText))
    this.setState({showSearchResults: true})
    // store.subscribe(()=>{
    //   this.forceUpdate()
    // })
  }

  handleChange=(e)=>{
    this.setState({
      searchText:e.target.value
    })
  }

  render() {
    const { showSearchResults, searchText } = this.state
    const { movies, search: {result: {data} } }= this.props;
    

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} value={searchText}/>
          <buton id="search-btn" onClick={this.handleSearch}>search</buton>
          {
            showSearchResults &&
            <div className='search-results'>
              <div className='search-result'>
                {data.Title}
                {data.Plot}
                <img src={data.Poster}/>
              </div>
            </div>

          }
        </div>
        
      </div>
    )

}
}

// class NavWrapper extends Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <Navbar store = {store}/>
//         }}
//       </StoreContext.Consumer>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return{
    movies: state.movies,
    search: state.search
  }
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar)
 export default connectedNavbarComponent;

// export default NavWrapper