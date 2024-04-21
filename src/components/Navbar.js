import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ScrollLink to="Home" smooth={true} duration={500} offset={-80} onClick={closeMobileMenu}>
                        <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
                            JOCELYN YU
                        </Link>
                    </ScrollLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <ScrollLink to="Home" smooth={true} duration={500} offset={-80} onClick={closeMobileMenu}>
                                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                                </Link>
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink to="Experience" smooth={true} duration={500} offset={-30} onClick={closeMobileMenu}>
                                <Link to='/Experience' className='nav-links' onClick={closeMobileMenu}>
                                    Experience & Projects
                                </Link>
                            </ScrollLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink to="Education" smooth={true} duration={500} offset={-80} onClick={closeMobileMenu}>
                                <Link to='/Education' className='nav-links' onClick={closeMobileMenu}>
                                    Education
                                </Link>
                            </ScrollLink>
                        </li>
                     
                        <li className='nav-item'>
                            <section className='social-media-nav'>
                                <div className='social-icons-nav'>
                                    <a
                                        className='social-icon-link linkedin'
                                        href='https://www.linkedin.com/in/jxcelynyu/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label='Linkedin'
                                    >
                                        <i className='fab fa-linkedin' />
                                    </a>
                                    <a
                                        className='social-icon-link github'
                                        href='https://github.com/jocelynwyu'
                                        target='_blank'
                                        aria-label='Github'
                                    >
                                        <i className='fab fa-github' />
                                    </a>
                                </div>
                            </section>
                        </li>
                            
                    </ul>
                    {/* <li className='nav-item'>
                            <a href="/images/Resume.pdf" target="_blank" download>
                                <button className="btn--outline">Resume</button>
                            </a>
                        </li> */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
