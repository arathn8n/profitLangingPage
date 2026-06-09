import React, { useState } from 'react'
import './header.scss'

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [rrss, setRrss] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    function handlerrss() {
        setRrss(!rrss)
    }

    return (
        <div className='border'>
            <header className='container'>
                <div className='btnMenuAndLogo'>
                    <button className='btnMenu' onClick={handleMenu}>
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div className='contentNavbar'>
                        <img src="/logo.webp" alt="logo" />
                        <span className='span'>professional <br />
                            fitness studio</span>

                        <ul className='menuRrssDesktop'>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <nav className='navDesktop'>
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Gallery</a>
                        <a href="#">Coach</a>
                    </nav>
                </div>

                <nav className={menu ? 'openMenu' : 'closeMenu'}>
                    <ul className='menuUl'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Coach</a>
                        </li>
                    </ul>
                </nav>

                <div className='containerRrss'>
                    <button className='btnRrss' onClick={handlerrss}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>

                    <ul className={rrss ? 'openRrss' : 'closeRrss'}>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header