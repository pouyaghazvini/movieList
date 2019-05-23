import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type='text' id='search-bar' placeholder='   Search...'></input>
          <span>  
              <input type="submit" id='go-button' value="Go!"></input>
          </span>
      </div>
    )
  }
}

export default SearchBar;