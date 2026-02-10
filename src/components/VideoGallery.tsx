import { motion } from "framer-motion";
import { Heart, Film } from "lucide-react";

const videos = [
  { src: "/audio/voicenote1.mp4", title: "I Found Her😭🤭" },
  { src: "/audio/voicenote2.mp4", title: "My Girll..." },
  { src: "/audio/voicenote3.mp4", title: "Nazar Na Lag Jaye Jaanu🧿..." },
  { src: "/audio/voicenote4.mp4", title: "Forever🤭" },
];

const VideoGallery = () => {
  return (
    <section className="py-24 px-4 gradient-love">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Film className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="font-display text-5xl sm:text-7xl text-primary mb-3">
          You Are Mine🤭
        </h2>
        <p className="font-heading italic text-muted-foreground text-lg">
          Some edits that hold high feelings for me...
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-card"
          >
            <video
              controls
              className="w-full"
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="p-4 flex items-center gap-3">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <h3 className="font-heading text-lg text-foreground">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
