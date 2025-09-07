// ===== ANIMACIONES DEL HEADER =====

// Navegación
export const navigationAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },
  
  item: {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },
  
  linkHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  
  linkTap: {
    scale: 0.95
  }
}

// Logo
export const logoAnimations = {
  container: {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  
  tap: {
    scale: 0.95
  }
}

// Theme Switcher
export const themeSwitcherAnimations = {
  container: {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  },
  
  icon: {
    hidden: { 
      scale: 0, 
      rotate: -180 
    },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    exit: { 
      scale: 0, 
      rotate: 180,
      transition: {
        duration: 0.3
      }
    }
  },
  
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  },
  
  tap: {
    scale: 0.9
  }
} 