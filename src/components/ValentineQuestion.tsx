import { useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const MAX_MESSAGE_LENGTH = 5000;

const messageSchema = z.string().trim().min(1, "Message cannot be empty").max(MAX_MESSAGE_LENGTH, "Message too long");

const ValentineQuestion = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [thoughts, setThoughts] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleYes = () => {
    setShowDialog(true);
  };

  const handleNo = () => {
    navigate("/go-back");
  };

  const handleSend = async () => {
    const rawMessage = thoughts || "She said YES! 💕";
    const parsed = messageSchema.safeParse(rawMessage);
    if (!parsed.success) return;
    const message = parsed.data;
    try {
      const { error } = await supabase.from("valentine_messages").insert({
        message,
      });
      if (error) {
        return;
      }
      setSubmitted(true);
      setTimeout(() => {
        setShowDialog(false);
        setSubmitted(false);
        setThoughts("");
      }, 2000);
    } catch {
      // Silently handle errors
    }
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
          You are already but still...
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-heading text-2xl shadow-romantic animate-pulse-glow transition-all hover:brightness-110"
          >
            Yes! 💖
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-primary text-center">
              {submitted ? "Thank You! 💖" : "Any Thoughts? 💭"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {submitted
                ? "You're the best! Happy Valentine's Day! 🌹"
                : "Write whatever is on your mind, my love..."}
            </DialogDescription>
          </DialogHeader>

          {!submitted && (
            <div className="space-y-4">
              <Textarea
                placeholder="Your thoughts..."
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                maxLength={MAX_MESSAGE_LENGTH}
                className="min-h-[120px] font-heading"
              />
              <Button
                onClick={handleSend}
                className="w-full font-heading text-lg rounded-full"
              >
                Send 💌
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ValentineQuestion;
