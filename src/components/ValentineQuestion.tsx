import { motion } from "framer-motion";
import { Heart, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ValentineQuestion = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    // Send WhatsApp notification
    window.open(
      "https://wa.me/917982257479?text=She%20said%20YES!%20💕%20Happy%20Valentine's%20Day!%20🌹",
      "_blank"
    );
  };

  const handleNo = () => {
    navigate("/go-back");
  };

  return (
    <section className="py-24 px-4 gradient-rose min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <HeartHandshake className="w-20 h-20 text-primary" />
        </motion.div>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary mb-4">
          Will You Be My Valentine??
        </h2>
        <p className="font-heading italic text-muted-foreground text-xl mb-12">
          This is the most important question of my life...
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-heading text-2xl shadow-romantic animate-pulse-glow transition-all hover:brightness-110"
          >
            Yes! 💕
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNo}
            className="px-10 py-4 bg-secondary text-secondary-foreground rounded-full font-heading text-lg border border-border transition-all hover:bg-muted"
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ValentineQuestion;
