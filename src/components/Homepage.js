import React from 'react'
import styled from 'styled-components'

class Homepage extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <h1>Hello from Homepage</h1>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
*{
  margin-top:10vh;
  padding:0;
}
`


export default Homepage;
