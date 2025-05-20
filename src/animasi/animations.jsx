// src/animations/animations.js
// Semua animasi Framer Motion siap pakai — tinggal import!

// ========== FADE IN ==========
// Muncul perlahan saat discroll
export const fadeInOnScroll = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};



// ========== SLIDE IN ==========
export const slideInLeftOnScroll = {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1 },
};

export const slideInRightOnScroll = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

export const slideInTopOnScroll = {
  initial: { y: -100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

export const slideInBottomOnScroll = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};



// ========== ZOOM ==========
export const zoomInOnScroll = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
};

export const zoomOutOnScroll = {
  initial: { scale: 1.2, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1 },
};

export const zoomOutOnScrollComponent = {
  initial: { scale: 1.2, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 2 },
};



// ========== ROTATE & FLIP ==========
export const rotateInOnScroll = {
  initial: { rotate: -90, opacity: 0 },
  whileInView: { rotate: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export const flipOnScroll = {
  initial: { rotateY: 180, opacity: 0 },
  whileInView: { rotateY: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};



// ========== BOUNCE (Looping, tidak tergantung scroll) ==========
export const bounce = {
  animate: {
    y: [0, -15, 0],
    transition: {
      repeat: Infinity,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};



// ========== HOVER EFFECT ==========
export const hoverScale = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};



// ========== STAGGER ANIMASI ==========
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerItemOnScroll = {
  hidden: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

