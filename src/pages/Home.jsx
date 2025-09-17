import React from "react";
import Herosection from "../components/Herosection";
import PlacementPartners from "../components/PlacementPartners";
import AchievementsMarquee from "../components/AchievementsMarquee";
import NoticeBoard from "../components/NoticeBoard";
import CoursesOffered from "../components/CoursesOffered";
import AboutSection from "../components/AboutSection";
import Leadership from "../components/Leadership";
import AlumniSection from "../components/alumni";
import UniversitySection from "../components/UniversitySection";
import AchievementsSection from "../components/AchievementsSection";

const Home = () => {
  return (
    <div>
      <Herosection />
      <CoursesOffered />
      <AchievementsSection/>
      <AchievementsMarquee />
      {/* <UniversitySection/> */}
      <PlacementPartners />
      <Leadership />
      <AboutSection />
      <AlumniSection />
      <NoticeBoard />
     
    </div>
  );
};

export default Home;
