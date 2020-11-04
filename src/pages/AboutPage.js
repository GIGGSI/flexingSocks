import React from "react";
import Hero from '../components/Hero'
import aboutBg from '../images/aboutBcg.jpg'
import Info from '../components/AboutPage/Info'

export default function AboutPage() {
    return (
        <>
            <Hero img={aboutBg} />
            <Info />
        </>
    )
}