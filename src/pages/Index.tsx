import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import VideoGallery from "@/components/VideoGallery";
import ValentineQuestion from "@/components/ValentineQuestion";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <main className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <VideoGallery />
        <LoveLetter />
        <ValentineQuestion />
      </main>
    </div>
  );
};

export default Index;
