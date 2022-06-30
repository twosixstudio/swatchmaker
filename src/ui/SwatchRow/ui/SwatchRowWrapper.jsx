import { motion } from "framer-motion";
import { wrapper } from "./framerVariants";

export const SwatchRowWrapper = (props) => (
  <motion.div variants={wrapper} initial="hide" animate="show" {...props} />
);
