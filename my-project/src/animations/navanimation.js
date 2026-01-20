export const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
     
      staggerChildren: 0.1, // delay between children
      delayChildren: 0.3,   // wait before starting children
    },
  },
}
export const parent1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
     
      staggerChildren: 0.3, // delay between children
      delayChildren: 0.1,   // wait before starting children
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: [-40,20,0],
    transition: { 
    
       duration: 0.5,
        ease: "easeInOut" },
  },
};

export const revealeffect = {
          initial:{ clipPath: "inset(0 100% 0 0)" }, // fully hidden (from right)
        visible:{ clipPath: "inset(0 0% 0 0)" },   // fully revealed
        transition:{ duration: 0.5, ease: "easeInOut" },
}