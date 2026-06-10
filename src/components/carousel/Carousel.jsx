import React, { useRef, useState } from 'react'
import DetailsCarousel from "./DetailsCarousel.jsx"
import { carousel } from "../../data/data.js"
import "./carousel.scss"

const Carousel = () => {

    const [dataCarousel] = useState(carousel)
    const trackRef = useRef(null)

    const scrollLeft = () => {
        if (trackRef.current) {
            // Scroll by roughly the width of one card + gap
            trackRef.current.scrollBy({ left: -320, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: 320, behavior: 'smooth' })
        }
    }

    return (
        <div className='card-carousel-wrapper'>
            <button className='carousel-btn prev' onClick={scrollLeft}>&#10094;</button>
            
            <div className='carousel-track' ref={trackRef}>
                {dataCarousel.map((item) => (
                    <DetailsCarousel key={item.id} item={item} />
                ))}
            </div>

            <button className='carousel-btn next' onClick={scrollRight}>&#10095;</button>
        </div>
    )
}

export default Carousel