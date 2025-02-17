import { getMessages } from 'next-intl/server';
import { Footer, NavBar } from '../Layouts';
import { AboutSection, EmailSection, HeroSection, ProjectsSection } from '../Components';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  // Being treated as a Promise in a complex way
  const { locale } = await params;

  const messages: any = await getMessages({ locale });

  // work on this later
  const title = messages.Website.title;

  const icons = {
    icon: 'images/logo.PNG',
  };

  return {
    icons,
    title,
  };
}

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
      </div>
      <Footer />
    </main>
  );
}
