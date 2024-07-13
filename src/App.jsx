import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <main className='max-w-full overflow-hidden selection:bg-purple-700 selection:text-white'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
      </main>
    </React.Fragment>
  )
}

export default App;