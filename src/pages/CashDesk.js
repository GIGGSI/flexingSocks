import React from "react";

import Title from "../components/Title";

import ShippingAddress from "../components/CashDeskPage/ShippingAdress";
import CheckoutSummary from "../components/CashDeskPage/CheckoutSummary";
import CheckoutPayment from "../components/CashDeskPage/CheckputPayment";


export default function CashDesk() {
    return (<>
            <Title title='Вашата поръчка' center={true}/>
            <div className="checkout container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <ShippingAddress/>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-inner">
                                <CheckoutSummary/>
                            </div>
                        </div>
                        <div className="col-lg-8 minus">
                            <CheckoutPayment/>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

