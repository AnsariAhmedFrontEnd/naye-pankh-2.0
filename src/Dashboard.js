import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import CarouselComponent from "./components/Crousel";
import DonationQuotes from "./components/Qoutes";
import DonationCard from "./components/DonationCard";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <DonationCard />
      <DonationQuotes />
      <CarouselComponent />
    </>
  );
};

export default Dashboard;
