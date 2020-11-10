import React from "react";
import platej from '../../images/bg_cod.svg'
import Payment from "./Payment";
import Order from "./Order";


export default function CheckoutPayment() {
    return (
        <div className="checkout-payment">
            <div className="payment-methods">
                <h1>Метод на плащане</h1>
                <div className="payment-method">
                    <Payment/>
                </div>
            </div>
            <Order/>
        </div>

    )
}
