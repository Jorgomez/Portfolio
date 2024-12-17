import React from 'react'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { projects } from '../../../utils/data/projects'

export const Projects = () => {
  return (
    <Box as='main' w='90%' mx='auto' mt={4} textAlign='center' py={6}>
      <Heading as='h1' size='xl' color='teal.500' mb={4}>
        Projects
      </Heading>

      {/* <Text fontSize='lg' color='gray.600' mb={8}>
        A showcase of some of my most impactful and exciting work.
      </Text> */}

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mt={20}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects
