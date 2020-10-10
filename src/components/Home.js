import React from 'react';
import styled from 'styled-components';
import {MethodConsumer} from '../context'
import Orders from 'orders'

class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
      <HomePage className="home-page">
        <MethodConsumer>
          {value=>{
            return value.orders.map(data => {
              return <Orders/>
            })
          }}
        </MethodConsumer>
      </HomePage>
    </React.Fragment>
    )
  }
}

const HomePage = styled.div`

`

export default Home
