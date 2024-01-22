import React from 'react';
import '../stylesheets/Shop.css'

const Shop = props => {
    return (
        <div className="Shop">
            <h3>{props.shopName}</h3>
            <p>{props.location}</p>
            <p><b>Type: </b>{props.type}</p>
        </div>
    );
}

export default Shop;