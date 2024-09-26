import { Main } from '@/components/craft';
import AboutUs from '@/components/home-page/AboutUs';
import CurrentProjects from '@/components/home-page/CurrentProjects';
import Hero from '@/components/home-page/Hero';
import OurServices from '@/components/home-page/OurServices';
import OurTeam from '@/components/home-page/OurTeam';
import OurValues from '@/components/home-page/OurValues';
import Footer from '@/components/shared/Footer';
import MainNavBar from '@/components/shared/MainNavBar';
import MobileNavBar from '@/components/shared/MobileNavBar';

export default function Page() {
  return (
    <Main>
      <MainNavBar />
      <MobileNavBar />
      <Hero />
      <AboutUs />
      <OurServices />
      <OurValues />
      <CurrentProjects />
      <OurTeam />
      <Footer />
    </Main>
  );
}
