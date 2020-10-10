import React from 'react';
import Navbar from "./components/Navbar";
import SearchBar from './components/Searchbar'
import Orders from './components/Orders'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <SearchBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
