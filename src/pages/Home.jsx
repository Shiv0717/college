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
import SkillDevelopment from "../components/SkillDevelopment";
import Super40CTA from "../components/Super40CTA";

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
     
      <AlumniSection />
      <Super40CTA/>
      <NoticeBoard />
      <AboutSection />
      <SkillDevelopment/>
     
    </div>
  );
};

export default Home;
