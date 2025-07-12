import React from 'react'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
export const Description = () => {
  return (
    <Box flex='1'>
      <Box mb={6} p={4}>
        <Box position='relative'>
          <Box float='right' ml={6}>
            <Image
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1734466482/Profile%20photos/untitled%20folder/IMG_7741_xhyayk_Sharpened_yotqcp.webp'
              alt='My profile picture'
              borderRadius='full'
              boxSize={{ base: '150px', md: '250px' }}
              objectFit='cover'
              objectPosition={{ base: '-65px', md: '-108px' }}
            />
          </Box>

          <Heading
            as='h2'
            size='lg'
            color='teal.500'
            textAlign='left'
            mt={0}
            fontWeight={500}
            fontSize={'25px'}
          >
            About me
          </Heading>
          <Text
            fontSize='lg'
            color='gray.600'
            textAlign='justify'
            mt={7}
            mb={3}
            fontWeight={400}
          >
            As a Full Stack Developer at CareExpand, I specialize in creating innovative mobile healthcare solutions using React Native, Expo, TypeScript, and Socket.io for real-time functionality. I see technology as an infinite gateway to creating solutions that make a real impact in people's lives.

I combine my expertise in mobile app development with full-stack web development, working with React, Node.js, and modern JavaScript technologies. My experience spans both frontend user interfaces and backend API development, with a strong focus on creating scalable, user-centered solutions.

My background in management and public administration gives me a unique perspective on user needs and team collaboration, enabling me to bridge technical development with business requirements effectively.
          </Text>
          <Heading
            as='h4'
            size='13px'
            color='teal.500'
            textAlign='left'
            mt={4}
            mb={3}
            fontWeight={400}
          >
            My Development Journey
          </Heading>

          <Text fontSize='lg' color='gray.600' textAlign='justify' mb={3}>
            In 2024, I dedicated myself to studying Full Stack Development, mastering key technologies such as JavaScript, React, Node.js, MongoDB, and Express.js through intensive learning and practical projects. Beyond my formal studies, I took the initiative to create my own projects independently, which allowed me to strengthen my skills in both front-end and back-end development.
          </Text>

          <Heading
            as='h3'
            size='13px'
            color='teal.500'
            textAlign='left'
            mt={4}
            mb={3}
            fontWeight={400}
          >
            My Previous Experience
          </Heading>
          <Text fontSize='lg' color='gray.600' textAlign='justify' mb={3}>
            Before becoming a developer, I worked as a management professional
            with a Bachelor's degree in Public Administration, which helped me
            develop communication, project management, and problem-solving
            skills.
          </Text>

          <Heading
            fontWeight={400}
            as='h3'
            size='13px'
            color='teal.500'
            textAlign='left'
            mt={4}
            mb={3}
          >
            My Learning Path
          </Heading>
          <Text fontSize='lg' color='gray.600' textAlign='justify' mt={3}>
            I consider myself to be a self-learning and proactive individual,
            which has enabled me to adapt quickly and work effectively in
            multidisciplinary teams. These skills, combined with my experience
            in project development, enable me to better understand user needs
            and create effective solutions.
          </Text>

          <Heading
            as='h3'
            size='13px'
            color='teal.500'
            textAlign='left'
            mt={4}
            mb={3}
            fontWeight={400}
          >
            Current Learning and Goals
          </Heading>
          <Text fontSize='lg' color='gray.600' textAlign='justify' mt={3}>
            I am currently focused on learning additional backend tools and technologies to further specialize in full-stack development. My goal is to complement my frontend expertise with deeper backend knowledge, allowing me to create more comprehensive and robust solutions. I'm also exploring new technologies and frameworks that can enhance my ability to build innovative applications.
          </Text>

          <Heading
            fontWeight={400}
            as='h4'
            size='13px'
            color='teal.500'
            textAlign='left'
            mt={4}
          >
            What Drives Me
          </Heading>
          <Text fontSize='lg' color='gray.600' textAlign='justify' mt={3}>
            I am particularly interested in projects that allow me to combine my
            passion for technology with my ability to understand and manage user
            needs, contributing to the success of teams and projects.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
