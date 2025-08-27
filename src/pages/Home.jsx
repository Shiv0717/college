import React from 'react';
import Herosection from '../components/Herosection';
import PlacementPartners from '../components/PlacementPartners';
import AchievementsMarquee from '../components/AchievementsMarquee';
import NoticeBoard from '../components/NoticeBoard';
import CoursesOffered from '../components/CoursesOffered';
import AboutSection from '../components/AboutSection';
import Leadership from '../components/Leadership';

const Home = () => {
  return (
    <div>
      <Herosection/>
      <AchievementsMarquee/>
      <CoursesOffered/>
      <AboutSection/>
      <Leadership/>
      <PlacementPartners/>
      <NoticeBoard/>
    </div>
  );
}

export default Home;
