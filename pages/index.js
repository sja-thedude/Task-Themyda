// pages/index.js
import EventHeader from '../components/Header/EventHeader';
import Footer from '../components/Footer/Footer';
import InfoSection from '../components/MainContent/InfoSection';

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex">
      <EventHeader />
      <InfoSection />
      <Footer />
    </div>
  );
}
