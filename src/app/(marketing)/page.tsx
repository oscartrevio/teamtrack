import Header from './_components/header';
import Hero from './_components/hero';

export default function Home() {
  return (
    <div className='flex flex-col gap-32'>
      <Header />
      <Hero />
    </div>
  );
}
