import React from 'react'
import styled from 'styled-components'
class Orders extends React.Component{
  render(){
    const {buyer_name, company, address, fabric, weight, quantity, cost_bracket,  delivery_location} = this.props;
    return (
      <OrderStyle className="order-component">
        <div className="profile">
          <div className="user-details">
            <img className="profile-logo" alt="" src="logos/profile.svg"/>
            <div className="name-address">
            <p><b>Buyer Name</b>{this.props.buyer_name}</p>
            <p>Company</p>
            <p>Address</p>
            </div>
          </div>
          <ul className="order-details">
            <p className="order-spec"><b>Fabric </b>{fabric}</p>
            <p className="order-spec"><b>Weight </b>{weight}</p>
            <p className="order-spec"><b>Quantity</b> {quantity}</p>
            <p className="order-spec"><b>Cost Bracket</b>{cost_bracket}</p>
            <p className="order-spec"><b>Delivery Location</b>{delivery_location}</p>
          </ul>
          <ul className="img-icons">
              <img className="icon-list" alt="" src="logos/profile.svg"/>
              <img className="icon-list" alt="" src="logos/comment.svg"/>
              <img className="icon-list" alt="" src="logos/share.svg"/>
              <img className="icon-list" alt="" src="logos/save.svg"/>
          </ul>
        </div>
      </OrderStyle>
    )
  }
}

const OrderStyle = styled.div`

*{
  margin:1%;
  padding:0;
}

.profile{
  width:30%;
  height:100%;
  border:solid lightgrey;
  border-radius:10px;
  display:flex;
  flex-wrap:wrap;
  float:left;
}
.user-details{
  display:flex;
  height:100%;
}

.profile-logo{
  width:20%;
  height:130px;
  display:flex;
  flex-wrap:wrap;
}

.name-address{
  height:2;
}


.icon-list{
  width:10%;
  margin:7%;
  display:flex;
  flex-wrap:werap;
}

.icon-list:hover{
  background-color:gold;
}
.img-icons{
  display:flex;
  flex-wrap:wrap;
}
`


export default Orders
