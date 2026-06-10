import React from 'react'
import './section3.scss'
const Section3 = () => {
    return (
        <div className='bgImage2' id='section3'>
            <div className='workout'>
                <p>only 5 days</p>
                <h2 className='workoutH2'>start your <br />
                    workout now</h2>
                <p>Enter your name and email in the form below to get your first free workout at Profit.</p>


                <form className='form'>
                    <div>
                        <input type="text" placeholder='your name' required />
                    </div>
                    <div>
                        <input type="email" placeholder='E-mail' required />
                    </div>

                    <button type='submit' className='linkJoin'>JOIN NOW</button>
                </form>
            </div>
        </div>
    )
}

export default Section3