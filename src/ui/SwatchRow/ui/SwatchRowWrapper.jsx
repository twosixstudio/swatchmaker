import { motion } from "framer-motion";
import { wrapper } from "./framerVariants";

export const SwatchRowWrapper = (props) => (
  <motion.div variants={wrapper} initial="hide" animate="show" className="flex flex-col gap-4" {...props} />
);
