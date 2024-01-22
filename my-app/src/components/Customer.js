import React from 'react';
import '../stylesheets/Customer.css';

const Customer = props => {
    return (
        <div className='Customer'>
            <h3>{props.customerName}</h3>
            <p>{props.purchasedFrom}</p>
        </div>
    );
}

export default Customer;