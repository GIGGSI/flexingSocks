import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { Link } from 'react-router-dom'
import Services from "../components/HomePage/Services";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";


export default function HomePage() {
 

    return (
        <>
            <Hero title="awesome socks" max="true">
                <Link to='/products' className="main-link"
                    style={{ margin: '2rem' }} >
                    our products
                </Link>
            </Hero>
            <Services data-aos="fade-up" />
            <FeaturedProducts data-aos="fade-up" />
        </>
    )
}