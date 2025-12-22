import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stories from './components/Stories';
import WordOfTheDay from './components/WordOfDay';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nung-sand font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stories />
        <WordOfTheDay />
      </main>
      <Footer />
    </div>
  );
};

export default App;