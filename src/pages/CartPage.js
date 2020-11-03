import React from "react";
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartBg from '../images/storeBcg.jpeg'

export default function CartPage() {
    return (
        <>
            <Hero img={cartBg} />
            <CartSection />
        </>
    )
}