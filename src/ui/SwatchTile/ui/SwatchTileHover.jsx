import { motion } from "framer-motion";

export const SwatchTileHover = ({ children }) => (
  <motion.div
    className="flex h-full flex-grow items-center justify-center"
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 1, y: 0 }}
  >
    {children}
  </motion.div>
);
