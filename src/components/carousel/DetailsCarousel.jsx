import React from 'react'

const DetailsCarousel = ({ item }) => {

    const { title, desc, img } = item

    return (
        <div className="carousel-card">
            <figure>
                <img src={`/${img}`} alt={title} />
            </figure>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default DetailsCarousel