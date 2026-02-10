import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gradient-hero relative px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        {/* Circular profile photo with flashy border */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1 animate-flashy-border">
            <img
              src="/photos/profile.jpg"
              alt="My Love"
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
            <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 text-primary fill-primary" />
        </motion.div>

        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-primary mb-4">
          For You
        </h1>
        <p className="font-heading text-xl sm:text-2xl text-foreground/70 italic max-w-lg mx-auto">
          Every moment with you is a beautiful memory I cherish forever
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
