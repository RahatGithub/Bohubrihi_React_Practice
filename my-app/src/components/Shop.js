import React from 'react';
import '../stylesheets/Shop.css'

const Shop = props => {
    const customers = props.customers.map((customer, index) => {
        return (
            <li key={index}> <small>{customer.customerName}</small> </li>
        )
    });

    return (
        <div className="Shop">
            <h3>{props.shopName}</h3>
            <p>{props.location}</p>
            <p><b>Type: </b>{props.type}</p>
            <p><b>Previous customers:</b></p>
            <ol>
                {customers}
            </ol>
            <button onClick={props.delete}>Delete</button>
        </div>
    );
}

export default Shop;