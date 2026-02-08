import Hero from './sections/home/Hero';
import LatestNews from './sections/home/LatestNews';
import UpcomingMatches from './sections/home/UpcomingMatches';

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestNews />
      <UpcomingMatches />
    </div>
  );
}
