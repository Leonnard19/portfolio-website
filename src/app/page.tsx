import { AboutSection } from './Components/AboutSection';
import AchievementsSection from './Components/AchievementsSection';
import { EmailSection } from './Components/EmailSection';
import { Footer } from './Components/Footer';
import { HeroSection } from './Components/HeroSection';
import { NavBar } from './Components/NavBar';
import { ProjectsSection } from './Components/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-10 pt-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
