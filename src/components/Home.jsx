import React from 'react'
import Header from './header/Header'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Carousel from './carousel/Carousel'
const Home = () => {
    return (
        <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Carousel />
        </>
    )
}

export default Home