import React from 'react'
import { motion } from 'framer-motion'
import { IPhoneX } from 'react-device-frames'


import './ProjectShowcase.scss'

const ProjectShowcase = ({ project, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.section 
      className={`project-showcase ${isEven ? 'project-showcase--normal' : 'project-showcase--reverse'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="project-showcase__container">
        
        <div className="project-showcase__image">
          <div className="project-image-container">
            {index === 0 ? (
              <div className="device-container">
                <IPhoneX
                  screenshot={project.imgFront}
                />
              </div>
            ) : (
              <div className="project-mockup">
                {/* Placeholder para otros proyectos */}
              </div>
            )}
          </div>
        </div>

        
        <div className="project-showcase__content">
          <div className="project-content">
            
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectShowcase
