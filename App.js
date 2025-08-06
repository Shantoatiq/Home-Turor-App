import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;

