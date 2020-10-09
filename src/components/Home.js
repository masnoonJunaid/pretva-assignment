import React from 'react';
import styled from 'styled-components';

class Home extends React.Component {
  render(){
    return (
      <HomePage className="home-page">
        <h2>Hello from Home</h2>
      </HomePage>
    )
  }
}

const HomePage = styled.div`

`

export default Home
