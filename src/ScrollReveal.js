// components/ScrollReveal.js
import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // Start hidden & slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate into place
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
