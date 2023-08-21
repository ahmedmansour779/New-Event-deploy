import React from 'react'
import AboutUs from './components/About Us/AboutUs'
import AccordionComponent from './components/AccordionComponent/AccordionComponent'
import CountactUs from './components/CountactUs/CountactUs'
import CreativSpeakersComponent from './components/Creative Speakers/CreativSpeakers'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar/NavBar'
import OverView from './components/NavbarHome/OverView'
import OurSponsorsHome from './components/Our Sponsors/OurSponsorsHome'
import OurPrograms from './components/Our programs'
import Register from './components/Register'
import WatchVideo from './components/Watch Video'
import Venue from './components/venue/Venue'

function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <AboutUs />
            <OverView />
            <WatchVideo />
            <CreativSpeakersComponent />
            <OurPrograms />
            <Register />
            <AccordionComponent />
            <Venue />
            <OurSponsorsHome />
            <CountactUs />
            <Footer />
        </>
    )
}

export default Home