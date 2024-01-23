import React from 'react';
import '../stylesheets/Customer.css';

const Customer = props => {
    const shops = props.shops.map((shop, index) => {
        return (
            <li key={index}><small>{shop}</small></li>
        )
    })

    return (
        <div className='Customer'>
            <h3>{props.customerName}</h3>
            <p><b>Purchased from: </b></p>
            <ol>
                {shops}
            </ol>
            <button onClick={props.delete}>Delete</button>
        </div>
    );
}

export default Customer;