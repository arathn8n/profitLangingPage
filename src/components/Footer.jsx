import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <figure>
                <img src="/logo.webp" alt="logo" />
                <figcaption>
                    <p>Mon-Fri: 8am – 7pm <br /> Sat-Sun: 9am – 5pm</p>

                </figcaption>
            </figure>

            <div>
                <header>
                    <h3>address</h3>
                </header>

                <address>
                    <p>8439 Pierce Court <br />
                        Sacramento, CA 95820</p>
                </address>
            </div>

            <div>
                <header>
                    <h3>get in touch</h3>
                </header>
                <p>
                    Phone1-800-123-1234 <br />
                    E-MailInfo@demolink.org
                </p>
            </div>
        </footer>
    )
}

export default Footer