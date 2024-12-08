import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Screens/navbar';
import Home from './Screens/Home';
import About from './Screens/about';
import Project from './Screens/project';
import Contact from './Screens/contact';
import Footer from './Screens/footer';
import Loader from './Screens/loader';
import Cursor from './Screens/Cursor';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2820);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <Navbar />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
