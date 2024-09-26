import { Main } from '@/components/craft';
import Hero from '@/components/home-page/hero';
import MainNavBar from '@/components/shared/MainNavBar';
import MobileNavBar from '@/components/shared/MobileNavBar';

export default function Page() {
  return (
    <Main>
      <MainNavBar />
      <MobileNavBar />
      <Hero />
    </Main>
  );
}
