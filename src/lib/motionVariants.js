const motionVariants = {
  // Basic Fade Variants
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeOut: {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  },

  // Slide Variants
  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  slideInRight: {
    hidden: { x: 100, opacity: 0 },   // Adjust x to a lower value if needed
    visible: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  slideInUp: {
    hidden: { y: "100vh", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
  },
  slideInDown: {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "-100vh", opacity: 0 },
  },

  // Scale Variants
  scaleUp: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  scaleDown: {
    hidden: { scale: 1.2, opacity: 1 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },

  // Rotation Variants
  rotateIn: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  },
  rotateOut: {
    hidden: { rotate: 0, opacity: 1 },
    visible: { rotate: 180, opacity: 0 },
  },

  // Bounce Variants
  bounce: {
    hidden: { y: -30 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },

  // Flip Variants
  flipInX: {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  flipInY: {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 90, opacity: 0 },
  },

  // Floating Animation for Elements (e.g., social icons, CTA)
  floating: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },

  // Staggered Container (used for parent elements)
  staggerContainer: {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  // Zoom-in/Zoom-out
  zoomIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  zoomOut: {
    hidden: { scale: 1.2, opacity: 1 },
    visible: { scale: 1, opacity: 0 },
    exit: { scale: 1.2, opacity: 0 },
  },

  // Custom Parallax Effect (for vertical scrolling)
  parallax: (scrollY) => ({
    style: {
      y: scrollY,
    },
  }),

  // Wobble Effect (like a subtle shake)
  wobble: {
    animate: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },

  // Pop-up Effect (useful for notifications or quick attention grabbers)
  popUp: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },

  // Shake Effect (horizontal shake, great for error states)
  shake: {
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },

  // Custom Path Animation (can be used for drawing animations on SVG paths)
  pathAnimation: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  },

  //   For Navbar
  menuOpen: {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -20 },
  },
  linkHover: {
    hover: { scale: 1.1, color: '#f5f5f5' }, // Slight scale and color change on hover
  },
  iconRotate: {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  },
};

export default motionVariants;
