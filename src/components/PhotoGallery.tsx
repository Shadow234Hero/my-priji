import { motion } from "framer-motion";

const photos = [
  { src: "/photos/photo1.jpg", alt: "My love", rotate: -3, caption: "My Forever Person 💖" },
  { src: "/photos/photo2.jpg", alt: "My love", rotate: 2, caption: "One In The World 🌍" },
  { src: "/photos/photo3.jpg", alt: "My love", rotate: -2, caption: "My Sunshine ☀️" },
  { src: "/photos/photo4.jpg", alt: "My love", rotate: 3, caption: "Prettiest Girl 🫠" },
  { src: "/photos/photo5.jpg", alt: "My love", rotate: -1, caption: "My Heart, My Home 🏡" },
];

const PhotoGallery = () => {
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
          My Swarg Ki Pri🫣🤭
        </h2>
        <p className="font-heading italic text-muted-foreground text-lg">
          Kitni Sundrrr Ho AAP😭😭
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: photo.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`relative group ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-card p-2 sm:p-3">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                loading="lazy"
              />
              <p className="font-display text-primary text-center text-lg sm:text-xl mt-2 pb-1">{photo.caption}</p>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-xl pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
