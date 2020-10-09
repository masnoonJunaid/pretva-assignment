import React,{Component} from 'react';
import {orderDetails} from './data'

const MethodContext = React.createContext();
// Provider and Consumer methods make sure data is flowing top to bottom

class methodProvider extends Component{
  state = {
    orders: [],
  }
  componentDidMount(){
    this.setProfile();
  }

  setProfile = () => {
    let temProfiles = [];
    orderDetails.foreach(item=>{
      const singleProfile = {...item};
      temProfiles = [...temProfiles, singleProfile]
    })
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
export {methodProvider, MethodConsumer}
