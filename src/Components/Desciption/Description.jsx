import React from 'react'
import { motion } from 'framer-motion'
import './Description.scss'

export const Description = () => {
  return (
    <div className="description-container">
      <div className="description-content">
        <div className="description-section">
          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.7
            }}
          >
            <img
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1734466482/Profile%20photos/untitled%20folder/IMG_7741_xhyayk_Sharpened_yotqcp.webp'
              alt='My profile picture'
              className="profile-image"
            />
          </motion.div>

          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.8
            }}
          >
            About me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 1.0
            }}
          >
            <p className="description-text">
              As a Full Stack Developer at CareExpand, I specialize in creating innovative mobile healthcare solutions using React Native, Expo, TypeScript, and Socket.io for real-time functionality. I see technology as an infinite gateway to creating solutions that make a real impact in people's lives.
            </p>
            
            <p className="description-text">
              I combine my expertise in mobile app development with full-stack web development, working with React, Node.js, and modern JavaScript technologies. My experience spans both frontend user interfaces and backend API development, with a strong focus on creating scalable, user-centered solutions.
            </p>
            
            <p className="description-text">
              My background in management and public administration gives me a unique perspective on user needs and team collaboration, enabling me to bridge technical development with business requirements effectively.
            </p>

            <h4 className="subsection-title">My Development Journey</h4>
            <p className="description-text">
              In 2024, I dedicated myself to studying Full Stack Development, mastering key technologies such as JavaScript, React, Node.js, MongoDB, and Express.js through intensive learning and practical projects. Beyond my formal studies, I took the initiative to create my own projects independently, which allowed me to strengthen my skills in both front-end and back-end development.
            </p>

            <h3 className="subsection-title">My Previous Experience</h3>
            <p className="description-text">
              Before becoming a developer, I worked as a management professional
              with a Bachelor's degree in Public Administration, which helped me
              develop communication, project management, and problem-solving
              skills.
            </p>

            <h3 className="subsection-title">My Learning Path</h3>
            <p className="description-text">
              I consider myself to be a self-learning and proactive individual,
              which has enabled me to adapt quickly and work effectively in
              multidisciplinary teams. These skills, combined with my experience
              in project development, enable me to better understand user needs
              and create effective solutions.
            </p>

            <h3 className="subsection-title">Current Learning and Goals</h3>
            <p className="description-text">
              I am currently focused on learning additional backend tools and technologies to further specialize in full-stack development. My goal is to complement my frontend expertise with deeper backend knowledge, allowing me to create more comprehensive and robust solutions. I'm also exploring new technologies and frameworks that can enhance my ability to build innovative applications.
            </p>

            <h4 className="subsection-title">What Drives Me</h4>
            <p className="description-text">
              I am particularly interested in projects that allow me to combine my
              passion for technology with my ability to understand and manage user
              needs, contributing to the success of teams and projects.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
