import React from "react";
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImg from '../images/3.jpg';
import {ProductConsumer} from '../context'
import styled from 'styled-components';
import CartSection from '../components/CartPage';
import CartList from "../components/CartPage/CartList";
import Title from "../components/Title";
import platej from '../images/bg_cod.svg';
import ShippingAdress from "../components/CashDeskPage/ShippingAdress";
import CheckoutSummary from "../components/CashDeskPage/CheckoutSummary";
import CheckoutPayment from "../components/CashDeskPage/CheckputPayment";


export default function CashDesk() {
    return (<>
            <Title title='Вашата поръчка' center={true}/>
            <div className="checkout container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <ShippingAdress/>
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

