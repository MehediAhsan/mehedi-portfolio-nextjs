"use client";

import motionVariants from "@/lib/motionVariants";
import { motion } from "framer-motion";

const MotionWrapper = ({
  variantName = "fadeIn", // Default to fadeIn if no variant is specified
  children,
  delay = 0, // Optional delay for animation
  duration = 0.6, // Default duration of the animation
  stagger = 0, // Optional staggering for child animations
  customVariants = null, // Allows overriding with custom variants
  threshold = 0.2,       // Set scroll trigger threshold (0.2 = 20% visibility)
  ...props // Any other props you want to pass to the motion.div
}) => {
  // Choose the variant: customVariants (if provided) takes precedence
  const variants =
    customVariants || motionVariants[variantName] || motionVariants.fadeIn;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      exit="exit"
      viewport={{ once: true, amount: threshold }} // Control viewport behavior
      transition={{
        delay,
        duration,
        ...(stagger && { staggerChildren: stagger }), // Apply stagger if specified
      }}
      {...props} // Pass any additional props to motion.div
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
