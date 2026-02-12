import { motion } from "framer-motion";
import { Heart, Mic, Headphones } from "lucide-react";

const voiceNotes = [
  { src: "/audio/why_me.ogg", title: "Why Me? 💭", label: "What makes me special to her", icon: "heart" },
  { src: "/audio/what_she_is_to_me.ogg", title: "What She Is To Me 🌹", label: "She's my everything", icon: "headphones" },
  { src: "/audio/3_qs.ogg", title: "3 Questions ❓", label: "Three things I need to know", icon: "mic" },
];

const icons = {
  heart: Heart,
  headphones: Headphones,
  mic: Mic,
};

const VoiceNotes = () => {
  return (
    <section className="py-24 px-4 gradient-love relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <Headphones className="w-12 h-12 text-primary mx-auto" />
        </motion.div>
        <h2 className="font-display text-5xl sm:text-7xl text-primary mb-3">
          Listen to My Heart
        </h2>
        <p className="font-heading italic text-muted-foreground text-lg">
          Press play and hear what words alone can't say
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        {voiceNotes.map((note, i) => {
          const IconComponent = icons[note.icon as keyof typeof icons];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-romantic border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-sm shadow-lg">
                  {i + 1}
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-inner"
                  >
                    <IconComponent className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{note.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{note.label}</p>
                  </div>
                  <Heart className="w-4 h-4 text-primary/40 fill-primary/40 ml-auto" />
                </div>

                <div className="bg-background/50 rounded-xl p-3">
                  <audio controls className="w-full" preload="metadata">
                    <source src={note.src} type="audio/ogg" />
                  </audio>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default VoiceNotes;
