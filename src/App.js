import React from 'react';
import Navbar from "./components/Navbar";
import SearchBar from './components/Searchbar'
import Orders from './components/Orders'
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
      <Orders/>
      <Footer/>
    </div>
  );
}

export default App;
