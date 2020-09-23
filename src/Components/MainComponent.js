import React from 'react';
import About from './AboutComponent';
import Book from './BookingComponent';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Popup from './PopupComponent';
import Section from './SectionComponent';
import Stories from './StoriesComponent';
import Tour from './TourComponents';

const MainComponent = () => {
  return (
    <div className='natours'>
      <Navigation />
      <Header />
      <About />
      <Section />
      <Tour />
      <Stories />
      <Book />
      <Popup />
    </div>
  );
};

export default MainComponent;