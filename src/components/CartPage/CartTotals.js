import React from 'react';
import { ProductConsumer } from '../../context';


export default function CartTotals() {
    return <div className='row'>
        <ProductConsumer>
            {value => {
                const { clearCart, cartSubTotal, cartTax, cartTotal,
                } = value;
                return <div className="col text-title text-center my-4">
                    <button className="btn btn-outline-danger 
                    text-capitalize mb-4" onClick={clearCart}>clear cart</button>
                    <h3>сума : {cartSubTotal} лв.</h3>
                    <h3>такса : {cartTax} лв.</h3>
                    <h3>крайна цена: {cartTotal} лв.</h3>
                </div>
            }}
        </ProductConsumer>

    </div>
}
