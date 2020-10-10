import React,{Component} from 'react';
import {orderDetails} from './Data'

const MethodContext = React.createContext();
// Provider and Consumer methods make sure data is flowing top to bottom

class MethodProvider extends Component{
  state = {
    orders: []
  };
  componentDidMount(){
    this.setProfile();
  }

  setProfile = () => {
    let temProfiles = [];
    orderDetails.forEach(item => {
      const singleProfile = {...item};
      temProfiles = [...temProfiles, singleProfile]
    });
    this.setState(() => {
      return {orders:temProfiles}
    })
  }

  render(){
    return(
      <MethodContext.Provider value={{
        ...this.state
      }}
      >
      {this.props.children}
      </MethodContext.Provider>
    )
  }
}

const MethodConsumer = MethodContext.Consumer;
export {MethodProvider, MethodConsumer}
