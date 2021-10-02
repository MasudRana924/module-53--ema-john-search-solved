import React from 'react';
import img from '../images/giphy.gif'

const Placeorder = () => {
    return (
        <div >
             <h3>Your order is succeed</h3>
            <img src={img}alt="" className="img-fluid" />
           
        </div>
    );
};

export default Placeorder;