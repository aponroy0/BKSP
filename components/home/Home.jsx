import AboutSection from "./AboutSection";
import ActivitiesSection from "./ActivitiesSection ";
import EventsSection from "./events/EventsSection";
import GallerySection from "./GallerySection";
import HeadmasterMessage from "./HeadmasterMessage";
import HeroSection from "./HeroSection";
import NoticeBoard from "./notice/NoticeBoard";
import StatsBar from "./StatsBar";
import WhyBKSB from "./WhyBKSB";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HeadmasterMessage />
      <AboutSection />
      <ActivitiesSection />
      <NoticeBoard />
      <EventsSection />
      <GallerySection />
      <WhyBKSB />
    </>
  );
}
