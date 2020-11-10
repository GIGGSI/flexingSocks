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

export default function CashDesk() {
    return (<div className="container">
            <Title title='вашите артикули' center="true"/>

            <div className="row">
                <div className="col-8 mx-auto col-md-4 my-3">
                    <h3>Метод на плащане</h3>
                    <img src={platej} alt="наложен плтеж"/>
                    <p>Плащането се извършва при получаване на продукта. Таксата за обработка на плащане при доставка е
                        2 лв. на поръчка. </p>
                </div>
                <div className="col-8 mx-auto col-md-8 my-3">
                    <ProductConsumer>
                        {value => {
                            const {featuredProducts, cartTotal, cartSubTotal, cart} = value;
                            console.log(cartTotal)
                            return cart.map(product => {

                                return <ProductWrapper key={product.id}>
                                    <div className="row">
                                        <div className="col-4 mx-auto col-md-4 my-3">
                                            <h4>{product.title}</h4>
                                            <img src={product.image} alt={product.title}/>
                                        </div>

                                        <div className="col-4 mx-auto col-md-4 my-3">
                                            <h4>{product.price / 7} Брой</h4>
                                        </div>
                                        <div className="col-4 mx-auto col-md-4 my-3">
                                            <h4>{product.total.toFixed(2)} лв.</h4>
                                        </div>

                                    </div>


                                </ProductWrapper>


                            })
                        }}
                    </ProductConsumer>
                </div>


            </div>
        </div>


    )
}


const ProductWrapper = styled.div`
background: white;

img {
width: 120px;
}
`

