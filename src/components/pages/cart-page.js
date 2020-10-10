import React from 'react';
import CartTable from '../cart-table';

const CartPage = ({render}) => {
    return (
        <div className="cart" >  
            <CartTable/>
        </div>
    )
}

export default CartPage;