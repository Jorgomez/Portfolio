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
            I am a full-stack developer jr focused on building dynamic, scalable
            and user-centric web applications. I am currently working on a
            project that involves building a platform to connect people
            interested in learning new skills through sharing. This project is
            being developed using React, Node.js and MongoDB.
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
            This year I have dedicated myself to learning and mastering key
            technologies such as JavaScript, React, Node.js, MongoDB, HTML5,
            CSS3 and Express.js through practical projects that have allowed me
            to strengthen my skills in both front-end and back-end development.
            I have worked on building web applications, handling both the visual
            and user interaction aspects, as well as the logic behind the server
            and database.
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
            I am currently learning TypeScript and Next.js, and am also taking a
            course in Artificial Intelligence, exploring how to use the various
            tools AI provides to increase efficiency and innovation in solution
            development. My goal is to continue learning new technologies,
            working in collaborative teams, and creating innovative solutions
            that solve real-world problems.
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
