import Header from './_components/header';
import Hero from './_components/hero';
import { FAQ } from './_components/faq';

export default function Home() {
  return (
    <div className='flex flex-col gap-32'>
      <Header />
      <Hero />
      <FAQ />
    </div>
  );
}
