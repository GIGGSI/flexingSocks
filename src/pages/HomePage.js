import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { Link } from 'react-router-dom'
import Services from "../components/HomePage/Services";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";


export default function HomePage() {


    return (
        <>
            <Hero title="чорапите които обичаме" max="true">
                <h3>Търсиш новите си любими модели?</h3>
                <Link to='/products' className="main-link"
                    style={{ margin: '2rem' }} >
                    нашите чорапи
                </Link>
            </Hero>
            <Services data-aos="fade-up" />
            <FeaturedProducts data-aos="fade-up" />
        </>
    )
}