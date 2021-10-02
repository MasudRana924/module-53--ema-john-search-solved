import React from 'react';

const ReviewItem = (props) => {
    const{key,name,price,quantity,img}=props.product
    const {handleRemove}=props
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
            <h4 className="product-name">{name}</h4>
            <p>Price :{price}</p>
            <p>Quantity{quantity}</p>
            <button className="btn-regular" onClick={()=>handleRemove(key)}>Remove</button>
            </div>
            
            
        </div>
    );
};

export default ReviewItem;