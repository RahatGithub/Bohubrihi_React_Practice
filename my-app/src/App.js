import React, { Component } from 'react';
import './App.css';
import Shop from './components/Shop';
import Customer from './components/Customer';

class App extends Component {

  state = {
    shops: [
      { shopName: "T&C shoes", location: "Amberkhana", type: "Footwear" },
      { shopName: "FastCharge", location: "Subidbazar", type: "Mobile servicing" },
      { shopName: "Motin & Sons", location: "Shahi Eidgah", type: "Groceries" }
    ],
    customers: [
      { customerName: "Azad Shafiq", purchasedFrom: "T&C shoes" },
      { customerName: "Moinuddin Babor", purchasedFrom: "T&C shoes" },
      { customerName: "Rouf Mawla", purchasedFrom: "Motin & Sons" },
      { customerName: "Mahmud Rabbi", purchasedFrom: "FastCharge" },
      { customerName: "Shahin Haydar", purchasedFrom: "T&C shoes" }
    ],
    shouldShow: true
  };

  toggleShop = () => {
    this.setState({ shouldShow: !this.state.shouldShow });
  }

  render() {

    const shops = this.state.shops.map((shop, index) => {
      return (
        <Shop
          shopName={shop.shopName}
          location={shop.location}
          type={shop.type}
        />
      );
    });

    const customers = this.state.customers.map((customer, index) => {
      return (
        <Customer
          customerName={customer.customerName}
          purchasedFrom={customer.purchasedFrom}
        />
      );
    });

    return (
      <div className="App">
        <h1>Our shops</h1>
        <div className='shops'>
          {shops}
        </div>
        <h1>Our customers</h1>
        <div className='customers'>
          {customers}
        </div>
      </div>
    )
  }
}

export default App;
