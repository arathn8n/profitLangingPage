import React from 'react'
import './loader.scss'
const Loader = () => {
    return (
        <div className='contentLoader'>
            <span className="loader"></span>
            <br />
            <p>Loading...</p>
        </div>
    )
}

export default Loader