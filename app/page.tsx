import { Main } from '@/components/craft';
import AboutUs from '@/components/home-page/AboutUs';
import Hero from '@/components/home-page/Hero';
import OurServices from '@/components/home-page/OurServices';
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
      <Footer />
    </Main>
  );
}
