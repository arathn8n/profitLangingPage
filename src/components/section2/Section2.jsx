import React from 'react'
import "./section2.scss"

const Section2 = () => {
    return (
        <>

            <div className='containerGrid'>
                <article className='article'>
                    <div className='containerIcon'>
                        <i class="fa-solid fa-medal"></i>
                    </div>
                    <header>
                        <h2>Quality Service</h2>
                    </header>
                    <p>At our fitness studio, you can experience the best level of customer service.</p>
                </article>

                <article className='article'>
                    <div className='containerIcon'>
                        <i class="fa-solid fa-dumbbell"></i>
                    </div>
                    <header>
                        <h2>Spacious gym</h2>
                    </header>
                    <p>Our gym has enough place for all kinds of workouts and a wide variety of equipment.</p>
                </article>

                <article className='article'>
                    <div className='containerIcon'>
                        <i class="fa-solid fa-book"></i>
                    </div>
                    <header>
                        <h2>unique fitness programs</h2>
                    </header>
                    <p>Our coaches have developed more than 50 fitness programs and workouts for you.</p>
                </article>

                <article className='article'>
                    <div className='containerIcon'>
                        <i class="fa-solid fa-user-group"></i>
                    </div>
                    <header>
                        <h2>Group classes</h2>
                    </header>
                    <p>If you prefer training with friends, then our group classes have what you need.</p>
                </article>
            </div>

        </>
    )
}

export default Section2