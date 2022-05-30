import React from "react";
import { motion } from "framer-motion";
import { container } from "../../styling/animation/framerAnimations";

const AnimationContainer = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={container}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
