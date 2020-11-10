import React from "react";
import {ProductConsumer} from "../../context";
import styled from "styled-components";
import AllMoney from "./AllMoney";


export default function CheckoutSummary() {

    return (
        <div className="checkout-summary">
            <div className="">
                <ProductConsumer>
                    {value => {
                        const {featuredProducts, cartTotal, cart} = value;
                        console.log(cart)
                        return cart.map(product => {

                            return <ProductWrapper key={product.id}>
                                <div className="row">
                                    <div className="col-4 mx-auto col-md-4 my-3">
                                        <img src={product.image} alt={product.title}/>
                                    </div>
                                    <div className="col-4 mx-auto col-md-4 my-3">
                                        <h4>{product.count} бр.</h4>
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
            <AllMoney/>
        </div>
    )
}
const ProductWrapper = styled.div`
background: white;

img {
width: 80px;
}
`
