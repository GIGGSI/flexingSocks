import React from 'react';
import CartItem from './CartItem';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom'

export default function CartList() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {value => {
                            const {cart, increment, decrement, removeItem} = value;

                            if (cart.length === 0) {
                                return <div>
                                    <h4 className="text-title text-center my-4">
                                        Моля, добавете продукт в количката, преди да продължите
                                    </h4>
                                    <div className="col text-center">
                                        <Link to="/products" className="main-link">
                                            нашите чорапи

                                        </Link>
                                    </div>
                                </div>

                            }
                            return (<>
                                    {cart.map(item => (
                                        <CartItem key={item.id} cartItem={item} increment={increment}
                                                  decrement={decrement} removeItem={removeItem}>

                                        </CartItem>))}
                                </>
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>


        </div>
    )
}
