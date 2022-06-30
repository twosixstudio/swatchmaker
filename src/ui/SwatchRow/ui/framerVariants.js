export const wrapper = {
  hide: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      delayChildren: 0.2,
      staggerChildren: 0.02,
    },
  },
};
