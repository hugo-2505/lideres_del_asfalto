import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AvatarPromo from './components/AvatarPromo';
import Community from './components/Community';
import Technology from './components/Technology';
import Pillars from './components/Pillars';
import Blog from './components/Blog';
import EventSection from './components/EventSection';
import ChatSection from './components/ChatSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-asphalt text-white selection:bg-traffic selection:text-asphalt">
      <Header />
      <main>
        <Hero />
        <AvatarPromo />
        <Community />
        <Technology />
        <Pillars />
        <Blog />
        <EventSection />
        <ChatSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
