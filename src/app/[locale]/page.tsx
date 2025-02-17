import { getMessages } from 'next-intl/server';
import { Footer, NavBar } from '../Layouts';
import { AboutSection, EmailSection, HeroSection, ProjectsSection } from '../Components';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  const messages: any = await getMessages({ locale });

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
