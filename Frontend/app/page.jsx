import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BestSellersSection from "@/components/BestSellersSection";
import ShopByConcernSection from "@/components/ShopByConcernSection";
import RoutineStepsSection from "@/components/RoutineStepsSection";
import ProductSection from "@/components/ProductSection";
import TextureShowcase from "@/components/TextureShowcase";
import AIChatSection from "@/components/AIChatSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-base text-ink">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BestSellersSection />
      <ShopByConcernSection />
      <RoutineStepsSection />
      <ProductSection />
      <TextureShowcase />
      <AIChatSection />
      <PromoBanner />
      <Footer />
    </main>
  );
}
