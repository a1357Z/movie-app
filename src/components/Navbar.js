import React, { Component } from 'react'
import { searchMovie } from '../actions'
import { StoreContext} from '../index'
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
    const { store } = this.props
    store.dispatch(searchMovie(searchText))
    this.setState({showSearchResults: true})
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }

  handleChange=(e)=>{
    this.setState({
      searchText:e.target.value
    })
  }

  render() {
    
    const { store } = this.props
    const { search: {result: {data}}} = store.getState()
    const { showSearchResults, searchText } = this.state
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

class NavWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return <Navbar store = {store}/>
        }}
      </StoreContext.Consumer>
    )
  }
}

export default NavWrapper