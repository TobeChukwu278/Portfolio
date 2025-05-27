import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import About from './pages/About'
import Featuredworks from './pages/Featuredworks'
import Hero from './pages/Hero'
import Resume from './pages/Resume'
import DevNews from './pages/Blog';
import Connect from './pages/Connect';
import Footer from './pages/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='bg-gray-900 w-full min-h-screen'>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="featuredworks">
          <Featuredworks />
        </section>
        <section id="devnews">
          <DevNews />
        </section>
        <section id="connect">
          <Connect />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App