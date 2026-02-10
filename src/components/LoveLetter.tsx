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
            A Letter For You
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
            <span className="font-display text-4xl text-primary block mb-4">My Dearest Priji,</span>
          </p>
          
          <div className="font-body text-foreground/80 leading-relaxed text-base sm:text-lg space-y-4 mt-4">
            <p>
              Toh umm... khase se shuru kru?? kaise btau about my feelings kaise share kru?? Is this
              even possible?? I don't think so I don't even know ki kya bolu but it's just that I LOVE YOU
              And you know that kya ye bkna zaroori tha😭🤭 At this point i realised what really Love is
              and How much you matters to me.
            </p>
            <p>
              I know destiny is taking our tests... but still see how strong you are😭😭 main toh pant mein
              hag deta fir bolta mamma saaf crow😭🤣 Toh Yes let's show what real Love is to God let's show
              World what real love is... it's just that I need you so... umm... Ahem Ahem...Will you chose to
              rest of life with me🫴(na bolegi bhi toh konsa sununga🤭😈)
            </p>
            <p>
              Thank You really really damn much for everything. I know ki Koi Thankyou itna bada abhar nhi
              chuka skta but shi h na aise peecha nhi chhutega🤭🤭.
            </p>
            <p className="font-heading italic text-primary pt-4">
              Yours Papa Ka Para🤭💖
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
