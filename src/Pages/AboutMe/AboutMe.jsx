import React from 'react'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import { Description } from '../../Components/Desciption/Description'
import { Skills } from '../../Components/Skills/Skills'

const About = () => {
  return (
    <Box as='main' w='90%' mx='auto' mt={4} py={6}>
      <Box
        textAlign='center'
        mb={8}
        w={{ base: '90%', md: '60%', lg: '40%' }}
        m={'auto'}
      >
        <Heading
          as='h3'
          size='lg'
          color='teal.500'
          fontWeight={'200'}
          fontSize={{ base: '20px', md: '25px', lg: '28px' }}
        >
          <span style={{ fontWeight: '500' }}>Full-Stack Developer</span> with a{' '}
          <span style={{ fontWeight: '500' }}>Management</span> Background
        </Heading>
      </Box>{' '}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={6}
        justify='space-between'
        mt={'60px'}
      >
        <Description flex={{ base: '1', md: '3' }} />

        <Skills flex={{ base: '1', md: '' }} />
      </Flex>
    </Box>
  )
}

export default About
