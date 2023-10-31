import Achievements from "@/components/Achievements";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import CommunityUpdates from "@/components/CommunityUpdates";
import Customers from "@/components/Customers";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Unlock from "@/components/Unlock";
import Unlock2 from "@/components/Unlock2";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Unlock2 />
      <Customers />
      <CommunityUpdates />
      <Demo />
      <Footer />
    </>
  );
}
