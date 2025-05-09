import DownloadButtons from "@/components/downloadButtons";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Video from "@/components/video";

export default function Home() {
  return (
    <div className="font-iransans">
      <Header />
      <HeroSection />
      <DownloadButtons />
      <Services />
      <Slider />
      <Video />
      <Footer />
    </div>
  );
}
