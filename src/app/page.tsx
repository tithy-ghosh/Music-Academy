import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourse";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonialCard from "./components/TestimonialCard";
import UpcomingWebiner from "./components/UpcomingWebiner";

export default function Home() {
  return (
   <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]'>
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonialCard />
    <UpcomingWebiner />
   </main>
  );
}
