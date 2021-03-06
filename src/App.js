import React from 'react';
import NavBar from './components/NavBar';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Copyright from './components/Copyright';
import Technologies from './sections/Technologies';

function App() {
  return (
    <div id="page-top">
      <NavBar />
      <Header />
      <Portfolio />
      <About />
      <Experience />
      <Education />
      <Technologies />
      <Footer />
      <Copyright />
      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </div>
  );
}

export default App;
