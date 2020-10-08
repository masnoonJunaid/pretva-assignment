import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import styled from 'styled-components'

//declaring class based component
class Navbar extends React.Component {
  render() {
    return (
      <NavWrapper className="nav-bar">
        <Link className="home-link" to="/">
          <img className="logo-image" alt="" src="pretlogo.png"/>
        </Link>
        <ul className="link-list">
          <Link className="nav-links">About</Link>
          <Link className="nav-links">Services</Link>
          <Link className="nav-links">Search</Link>
          <Link className="nav-links">Feedback & Support</Link>
        </ul>
        <Link className="left-float">
          <img className="left-float" alt="" src="logos/bell.svg"/>
        </Link>
        <button className="left-float" id="button">
          <span className="my-account">My Account</span>
          <img id="dropdown" alt="" src="logos/dropdown.svg"/>
        </button>
        {/*<div className="dropdown-list">
          <Link className="dropdown-link">Log Out</Link>
          <Link className="dropdown-link">Profile</Link>
          <Link className="dropdown-link">Dashboard</Link>
          <Link className="dropdown-link">Update</Link>
        </div>*/}

        <Link id="log-out" className="left-float">
          <p>Log Out</p>
        </Link>
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
*{
  margin:0;
  padding:0;
}

.logo-image{
  height:60px;
}

.link-list{
  margin-left:auto;
  margin-right:auto;
  padding: 25px;
  width:40%;
}

.nav-links{
  margin:2%;
  text-decoration:none;
  font-size:140%;
  border-radius:5%;
  color:black;
  font-family:'Roboto', sans-serif;
}
.nav-links:hover{
  background-color: gold;
  border: solid gold;
}
.left-float{
  height:5vh;
  text-decoration:none;
  font-family:'Roboto', sans-serif;
  padding: 1%;
}

#button{
  margin-top:1%;
  text-align:center;
}

#log-out{
  margin-top:.88%;
  background-color:grey;
  height:10%;
  margin-left:0.2%;
  margin-right:0.2%;
  border-radius:8%;
  font-family:'Roboto', sans-serif;
}

#dropdown {
  height:1200%;
  margin-left:10px;
  width:8px;

}
p{
  color:white;
}

// dropdown-list{
//   display:none;
//   position:absolute;
//   background-color:grey;
//   min-width:160px;
//   box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)
//   z-index: 1;
// }
//
// .dropdown-link{
//   float:none;
//   color:black;
//   padding: 12px 16px;
//   text-decoration:none;
//   text-align:left;
//   display:block;
// }

button:hover .dropdown-list{
  display:block;
}

`

export default Navbar;
