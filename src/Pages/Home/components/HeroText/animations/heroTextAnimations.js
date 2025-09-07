
export const heroTextAnimations = {
  container: {
    hidden: { 
      y: "-300%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  },
  
  // Jorge Gómez - aparece último (está arriba)
  title: {
    hidden: { 
      opacity: 0,
      y: -50,
      rotateY: -100,
      rotateX: 5,
      translateZ: 120,
      
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 40,
      rotateX: 5,
      translateZ: 120,
      
      transition: {
        duration: 2,
        delay: 1.0,
        ease: "easeOut"
      }
    }
  },
  
  // Web & Mobile - aparece penúltimo
  subtitle: {
    hidden: { 
      opacity: 0,
      y: -50,
      rotateY: -100,
      rotateX: 5,
      translateZ: 120,
      
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 40,
      rotateX: 5,
      translateZ: 120,
      
      transition: {
        duration: 2,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  },
  
  // Developer - aparece tercero
  developer: {
    hidden: { 
      opacity: 0,
      
      rotateY: -100,
      rotateX: 5,
      translateZ: 120,
      
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 40,
      rotateX: 5,
      translateZ: 120,
      
      transition: {
        duration: 2,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  },
  
  // Descripción 1 - aparece segundo
  description1: {
    hidden: { 
      opacity: 0,
      
      rotateY: -100,
      rotateX: 5,
      translateZ: 120,
        
    },
    visible: { 
      opacity: 1, 
      
      rotateY: 40,
      rotateX: 5,
      translateZ: 120,
      
      transition: {
        duration: 2,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  },
  
  // Descripción 2 - aparece primero (más abajo)
  description2: {
    hidden: { 
      opacity: 0,
      y: -30,
      rotateY: -100,
      rotateX: 5,
      translateZ: 120,
      
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 40,
      rotateX: 5,
      translateZ: 120,
      
      transition: {
        duration: 2,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }
}

// Efectos hover exactos del código de referencia
export const hoverEffect = {
  rotateY: 25,
  rotateX: 5,
  translateZ: 130,
  translateY: -10,
  transition: {
    duration: 1.5,
    ease: [0.075, 0.82, 0.165, 1] // cubic-bezier del código original
  }
}

// Efecto hover para el texto (transparencia)
export const textHoverEffect = {
  color: "transparent",
  transition: { duration: 0.3 }
} 