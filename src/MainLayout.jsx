import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Application from './components/Application';

const MainLayout = () => {
    return (
        <div>
            <Application></Application>
            {/* <Navbar></Navbar> */}
            {/* <HeroSection></HeroSection> */}
            {/* <AboutMe></AboutMe> */}
            {/* <Skills></Skills> */}
            {/* <Projects></Projects> */}
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default MainLayout;