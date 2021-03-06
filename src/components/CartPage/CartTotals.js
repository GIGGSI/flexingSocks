import React from 'react';
import { ProductConsumer } from '../../context';
import {Link} from "react-router-dom";


export default function CartTotals() {
    return <div className='row'>
        <ProductConsumer>
            {value => {
                const { clearCart, cartSubTotal, cartTax, cartTotal,
                } = value;

                if (cartTotal === 0) {
                    return <div></div>
                } else {
                    return <div className="col text-title text-center my-4">
                        <button className="btn btn-outline-danger 
                    text-capitalize mb-4" onClick={clearCart}>изчисти кошницата</button>
                        {/* <h3>сума : {cartSubTotal} лв.</h3>
                    <h3>такса : {cartTax} лв.</h3> */}
                        <h3>крайна цена: {cartTotal} лв.</h3>
                        <Link to="/cashdesk" className="main-link">
                            касата
                        </Link>
                    </div>
                }

            }}
        </ProductConsumer>

    </div>
}
