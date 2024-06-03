import { motion } from "framer-motion";

const animations = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleY: 1 }, 

};

type Props = JSX.Element | JSX.Element[] | string | string[];

const AnimatedPage = ({ children }: { children: Props }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
