import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurPhilosophy from "@/components/OurPhilosophy";
import Location from "@/components/Location";
import FinalCalltoAction from "@/components/FinalCalltoAction";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#1E271B]">
      <Header />
      <main className="flex-grow w-full overflow-hidden">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="philosophy">
          <OurPhilosophy />
        </div>
        <div id="location">
          <Location />
        </div>
        <div id="contact">
          <FinalCalltoAction />
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

