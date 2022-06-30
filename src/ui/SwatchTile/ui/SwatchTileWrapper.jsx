import { motion } from "framer-motion";
import { wrapper } from "./framerVariants";

export const SwatchTileWrapper = (props) => (
  <motion.div
    variants={wrapper}
    className="h-16 w-20 rounded-md flex items-center justify-center font-bold flex-grow"
    {...props}
  />
);
