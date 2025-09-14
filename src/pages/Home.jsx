import React from "react";
import Herosection from "../components/Herosection";
import PlacementPartners from "../components/PlacementPartners";
import AchievementsMarquee from "../components/AchievementsMarquee";
import NoticeBoard from "../components/NoticeBoard";
import CoursesOffered from "../components/CoursesOffered";
import AboutSection from "../components/AboutSection";
import Leadership from "../components/Leadership";
import AlumniSection from "../components/alumni";

const Home = () => {
  return (
    <div>
      <Herosection />
      <CoursesOffered />
      <AboutSection />
      {/* <AchievementsMarquee /> */}
      {/*  */}
     
      {/*
      
       <Leadership />
       <AboutSection />
      <PlacementPartners />
      
      */}
      <NoticeBoard />
      <AlumniSection />
    </div>
  );
};

export default Home;
