import React from 'react'
import Navbar from "./section/Navbar.jsx"
import About from "./section/about.jsx"
import Projects from "./section/Projects.jsx"
import Clients from './section/Clients.jsx'
import Contact from './section/Contact.jsx'
import Footer from './section/Footer.jsx'
import Experience from './section/Experience.jsx'
import Hero from './section/Hero.jsx'

const App = () => {
  return (
    <>
      {/* Hero pełnoekranowy */}
      <Hero />
      
      {/* Sekcje z ograniczeniem szerokości */}
      <main className='max-w-7xl mx-auto'> 
        <Navbar />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
