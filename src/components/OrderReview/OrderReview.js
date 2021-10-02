import React from 'react';
import { Link} from 'react-router-dom';
import {useHistory} from 'react-router'
import useProducts from '../../Hooks/useProducts';
import useCart from '../../useCart/useCart'
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';


import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)


    }
    const handePlaceOrder = () => {
        // placeorder page ejawa hoiche histry diye 
     history.push('/place')
    //  acrt ta k call kore clear kore dewa hoilo 
    setCart([])
    // localstorage theke clear kora hoilo call kore
    clearTheCart()

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                {/* cart prosp diye cart er data ana hoise */}
                <Cart cart={cart}>
                    
                        <button onClick={handePlaceOrder} className="btn-regular">Place order</button>
                   
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;