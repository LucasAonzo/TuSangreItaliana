import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ProcessSection from './sections/ProcessSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <CTASection />
      </div>
    </MainLayout>
  );
}

export default App;

