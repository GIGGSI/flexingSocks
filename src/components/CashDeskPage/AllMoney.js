import {ProductConsumer} from "../../context";
import React from "react";


export default function AllMoney() {
    return (
        <div className="checkout-summary">
            <div className="">
                <ProductConsumer>
                    {value => {
                        const {cartTotal} = value;
                        return (
                            <h3 >Общо: {cartTotal.toFixed(2)} лв.</h3>
                        )
                    }}
                </ProductConsumer>
            </div>

        </div>
    )
}
