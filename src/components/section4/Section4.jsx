import React from 'react'
import './section4.scss'

const Section4 = () => {
    return (
        <section className='containerCLub'>
            <header>
                <h2 className='containerClubTitle'>welcome to our
                    fitness club</h2>
            </header>
            <p>Profit is the fitness club that makes fitness totally accessible to everybody. We promise to help people from all walks of life achieve their individual health and fitness goals — no matter their shape, age, and experience.</p>

            <div className='clubGrid' id='section4'>
                <img className='clubGrid-img' src="/gallery1.jpg" alt="galeria 1" />
                <img className='clubGrid-img' src="/gallery2.jpg" alt="galeria 2" />
                <img className='clubGrid-img' src="/gallery3.jpg" alt="galeria 3" />
                <img className='clubGrid-img' src="/gallery4.jpg" alt="galeria 4" />
                <img className='clubGrid-img' src="/gallery5.jpg" alt="galeria 5" />
                <img className='clubGrid-img' src="/gallery6.jpg" alt="galeria 6" />
                <img className='clubGrid-img' src="/gallery7.jpg" alt="galeria 7" />
                <img className='clubGrid-img' src="/gallery8.jpg" alt="galeria 8" />
                <img className='clubGrid-img' src="/gallery9.jpg" alt="galeria 9" />
                <img className='clubGrid-img' src="/gallery10.jpg" alt="galeria 10" />
            </div>
        </section>
    )
}

export default Section4