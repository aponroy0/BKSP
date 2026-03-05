import AboutSection from "./AboutSection";
import ActivitiesSection from "./ActivitiesSection ";
import EventsNewsletter from "./EventsNewsletter";
import GallerySection from "./GallerySection";
import HeadmasterMessage from "./HeadmasterMessage";
import HeroSection from "./HeroSection";

import NewsSection from "./NewSection";
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
      <NewsSection />
      <GallerySection />
      <WhyBKSB />
      <EventsNewsletter />
    </>
  );
}
