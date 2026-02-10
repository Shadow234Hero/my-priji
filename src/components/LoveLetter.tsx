import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-24 px-4 gradient-rose">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl sm:text-7xl text-primary mb-3">
            My Letter to You
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-romantic relative"
        >
          <Heart className="absolute top-6 right-6 w-5 h-5 text-primary/30 fill-primary/30" />
          
          <p className="font-body text-foreground/80 leading-relaxed text-lg space-y-4">
            <span className="font-display text-4xl text-primary block mb-4">My Dearest,</span>
          </p>
          
          <div className="font-body text-foreground/80 leading-relaxed text-base sm:text-lg space-y-4 mt-4">
            <p>
              From the moment you came into my life, everything changed. The colors became brighter, 
              the music sounded sweeter, and every ordinary moment turned into something magical — 
              all because of you.
            </p>
            <p>
              You are the first thought in my morning and the last smile before I sleep. Your laughter 
              is my favorite melody, and your presence is the warmth that makes my world feel complete.
            </p>
            <p>
              I don't need grand gestures to know what we have is real. It's in the little things — 
              the way you look at me, the way you hold my hand, the way you make even silence feel 
              like a conversation.
            </p>
            <p>
              Thank you for being you. Thank you for choosing me. Thank you for making every day 
              feel like Valentine's Day.
            </p>
            <p className="font-heading italic text-primary pt-4">
              Forever & Always Yours ♥
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
