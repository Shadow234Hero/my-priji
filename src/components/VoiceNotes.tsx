import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";

const voiceNotes = [
  { src: "/audio/voicenote1.mp4", title: "For Her ♥", label: "Voice Note 1" },
  { src: "/audio/voicenote2.mp4", title: "My Feelings", label: "Voice Note 2" },
  { src: "/audio/voicenote3.mp4", title: "From My Heart", label: "Voice Note 3" },
];

const VoiceNotes = () => {
  return (
    <section className="py-24 px-4 gradient-love">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl sm:text-7xl text-primary mb-3">
          Listen to My Heart
        </h2>
        <p className="font-heading italic text-muted-foreground text-lg">
          Press play and hear what words alone can't say
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {voiceNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary fill-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">{note.title}</h3>
                <p className="text-sm text-muted-foreground">{note.label}</p>
              </div>
            </div>
            <audio controls className="w-full" preload="metadata">
              <source src={note.src} type="audio/mp4" />
            </audio>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VoiceNotes;
