import React from "react";
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import productBg from '../images/1.2.jpg'


export default function ProductsPage() {
    return (
        <>
            <Hero img={productBg} />
            <Products />
        </>
    )
}