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
      return {orders:temProfiles};
    });
  }

  handleSearch = () => {
    console.log('Hello from search Result')
  };

  render(){
    return(
      <MethodContext.Provider value={{
        ...this.state,
        handleSearch: this.handleSearch
      }}
      >
      {this.props.children}
      </MethodContext.Provider>
    )
  }
}

const MethodConsumer = MethodContext.Consumer;
export {MethodProvider, MethodConsumer};
