import { Main } from '@/components/craft';
import About from '@/components/home-page/About';
import Hero from '@/components/home-page/Hero';
import Services from '@/components/home-page/Services';
import Footer from '@/components/shared/Footer';
import MainNavBar from '@/components/shared/MainNavBar';
import MobileNavBar from '@/components/shared/MobileNavBar';

export default function Page() {
  return (
    <Main>
      <MainNavBar />
      <MobileNavBar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </Main>
  );
}
