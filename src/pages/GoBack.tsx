import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-rose flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <Heart className="w-24 h-24 text-primary fill-primary/50" />
        </motion.div>

        <h1 className="font-display text-5xl sm:text-7xl text-primary mb-6">
          Areyy oo jyada chrbi chd rhi??
        </h1>
        <p className="font-heading text-2xl text-foreground/70 mb-12 italic">
          Aisa Lafa Marunga Na Dimaag Mein Hulululu Hojayega
        </p>
        <p className="font-heading text-3xl text-primary mb-12">
          Wapis jao aur click kro <span className="font-display text-4xl">Yes💖</span> pe
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading text-lg shadow-romantic transition-all hover:brightness-110"
        >
          <ArrowLeft size={20} />
          Take Me Back
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GoBack;
