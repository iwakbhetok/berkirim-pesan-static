import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureHighlight from "./components/FeatureHighlight";
import FeatureGrid from "./components/FeatureGrid";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeatureHighlight />
      <FeatureGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
