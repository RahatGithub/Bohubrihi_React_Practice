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
      { customerName: "Shahin Haydar", purchasedFrom: "T&C shoes" },
      { customerName: "Azad Shafiq", purchasedFrom: "Motin & Sons" },
      { customerName: "Rouf Mawla", purchasedFrom: "FastCharge" },
      { customerName: "Azad Shafiq", purchasedFrom: "FastCharge" },
    ],
    showShops: true,
    showCustomers: true
  };

  deleteShop = index => {
    const shops = [...this.state.shops];
    shops.splice(index, 1);
    this.setState({
      shops: shops
    })
  };

  deleteCustomer = index => {
    const customers = [...this.state.customers];
    customers.splice(index, 1);
    this.setState({
      customers: customers
    })
  }

  toggleShop = () => {
    this.setState({
      showShops: !this.state.showShops
    });
  };

  toggleCustomer = () => {
    this.setState({
      showCustomers: !this.state.showCustomers
    });
  };

  render() {

    const shops = this.state.shops.map((shop, index) => {
      return (
        <Shop
          shopName={shop.shopName}
          location={shop.location}
          type={shop.type}
          customers={this.state.customers.filter(customer => customer.purchasedFrom === shop.shopName)}
          delete={() => this.deleteShop(index)}
        />
      );
    });

    let uniqueCustomerNames = [];
    this.state.customers.forEach((customer, index) => {
      if (!uniqueCustomerNames.includes(customer.customerName)) {
        uniqueCustomerNames.push(customer.customerName)
      }
    });

    let uniqueCustomers = [];
    let aCustomer = new Object();
    uniqueCustomerNames.forEach((customerName, index) => {
      let shops = [];
      this.state.customers.forEach((customer, index) => {
        if (customer.customerName === customerName) {
          shops.push(customer.purchasedFrom);
        }
      });
      aCustomer = {
        customerName: customerName,
        shops: shops
      }
      uniqueCustomers.push(aCustomer);
    })

    // console.log(uniqueCustomers)

    const customers = uniqueCustomers.map((customer, index) => {
      return (
        <Customer
          customerName={customer.customerName}
          shops={customer.shops}
          delete={() => this.deleteCustomer(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>Our shops</h1>
        <button onClick={this.toggleShop}>Toggle shops</button>
        <div className='shops'>
          {this.state.showShops ? shops : null}
        </div>
        <h1>Our customers</h1>
        <button onClick={this.toggleCustomer}>Toggle customers</button>
        <div className='customers'>
          {this.state.showCustomers ? customers : null}
        </div>
      </div>
    )
  }
}

export default App;
