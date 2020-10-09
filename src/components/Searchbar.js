import React from 'react'
import styled from 'styled-components'

class SearchBar extends React.Component {
  render() {
    return(
      <SearchStyle className="search-bar">
        <p className="search-description"><b>Search</b> / Search Buyer Requirements</p>
        <ul className="search-button-list">
          <button className="search-buttons border1">Search Supplier Products</button>
          <button className="search-buttons border2">Search Buyer Requirements</button>
        </ul>
        <div className="search-filters">
          <h2 className="search-header">Search Filters</h2>
          <ul className="filter-list">
            <li className="filter-list">Product<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <li className="filter-list">Quantity<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <li className="filter-list">Cost<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <li className="filter-list">Lead Time<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <li className="filter-list">Rating<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <li className="filter-list">Location<img className="menu-logo" alt="" src="logos/dropdown.svg"/></li>
            <button className="filter-button">Apply Filters</button>
          </ul>
        </div>
        <div className="key-search">
          <input className="keyword-input" placeholder="Search with keywords"></input>
          <button className="search-button">Post Product Requirement</button>
        </div>
      </SearchStyle>
    )
  }
}

const SearchStyle = styled.div`

*{
  padding:0;
}
.search-description{
  font-size:120%;
  margin:5%;
}

.search-button-list{
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}

.search-buttons{
  margin:0.1%;
  width:18%;
  height:7vh;
  border:solid lightgrey;
}

.border1{
  border-radius:20px 0 0 20px;
}
.border2{
  border-radius:0 20px 20px 0;
}

.search-buttons:hover{
  background-color:gold;
}
.search-header{
  margin-left:3%;
  color:grey;
}

.search-filters{
  width:70%;
  height:15vh;
  margin-left:auto;
  margin-right:auto;
  border:solid lightgrey;
  border-radius:10px;
}
.filter-list{
  display:flex;
  flex-wrap:wrap;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}

.filter-button{
  margin-left:3%;
  border:solid lightgrey;
  border-radius:10px;

}

.menu-logo{
  height:10px;
  width:10px;
}

.key-search{
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}

.keyword-input{
  width: 55%;
  height:5vh;
  margin-top:1.5%;
}
.search-button{
  border:solid darkgrey;
  border-radius:14px;
  height:5vh;
  margin-left:1%;
  width:15%;
}

`



export default SearchBar
