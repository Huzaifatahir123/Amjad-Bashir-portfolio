import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';

// Standard Imports (Immediate Load - Above the Fold)
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy Imports (Load only when needed - Below the Fold)
const About = lazy(() => import('./components/About'));
const Service = lazy(() => import('./components/Service'));
const Work = lazy(() => import('./components/Work'));
const Contact = lazy(() => import('./components/ContactUs'));
const Footer = lazy(() => import('./components/footer'));

const App = () => {
  const [dark, setdark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="overflow-hidden">
      <Toaster />
      <Navbar theme={dark} settheme={setdark} />
      <Hero theme={dark} settheme={setdark} />

      {/* Suspense catches the lazy-loaded components. 
          The fallback ensures the user sees something (or nothing) 
          while the JS for those sections downloads in the background.
      */}
      <Suspense fallback={<div className="bg-white dark:bg-dark " />}>
        <About theme={dark} settheme={setdark} />
        <Service theme={dark} settheme={setdark} />
        <Work theme={dark} settheme={setdark} />
        <Contact theme={dark} settheme={setdark} />
        <Footer theme={dark} settheme={setdark} />
      </Suspense>
    </div>
  );
};

export default App;