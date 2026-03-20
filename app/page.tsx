import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BizSection from "@/components/BizSection";
import GoSection from "@/components/GoSection";
import NetworkSection from "@/components/NetworkSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BizSection />
      <GoSection />
      <NetworkSection />
      <Pricing />
      <Footer />
    </main>
  );
}
