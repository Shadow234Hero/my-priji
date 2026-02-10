import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import VoiceNotes from "@/components/VoiceNotes";
import ValentineQuestion from "@/components/ValentineQuestion";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />
      <main className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <LoveLetter />
        <VoiceNotes />
        <ValentineQuestion />
      </main>
    </div>
  );
};

export default Index;
