import React from 'react';
import NavBar from './components/NavBar';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <body id="page-top">
      <NavBar />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </body>
  );
}

export default App;
