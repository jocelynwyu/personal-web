import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainPage.css';

// import School from './pages/Education';
// import Experience from './pages/Experience';
// import HeroSection from './pages/HeroSection';
// import Projects from './pages/Projects';
// import Footer from './pages/Footer';


import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Footer from './pages/Footer'

function MainPage() {
    return(
        <>
            <Home/>
            <Experience/>
            <Projects/>
            <Education/>
            <Footer/>

        </>
    )
}

export default MainPage;