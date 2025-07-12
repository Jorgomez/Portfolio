import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb, SiTypescript, SiSocketdotio } from 'react-icons/si'
import { SiReact, SiExpo } from 'react-icons/si'

export const HeroStack = ({ iconSize = 10 }) => {
  return (
    <Box mt={10} ml={4}>
      {/* <Text fontSize='m' fontWeight='bold' mb={4}>
        Tech Stack
      </Text> */}
      <Flex
        gap={6}
        mt={4}
        wrap='wrap'
        justify={{ base: 'center', md: 'flex-start' }}
      >
          <Flex direction='column' align='center'>
          <Icon as={SiReact} boxSize={iconSize} color='#61DAFB' />
          <Text fontSize='sm' mt={2}>
            React Native
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={FaReact} boxSize={iconSize} color='teal.500' />
          <Text fontSize='sm' mt={2}>
            React
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={SiTypescript} boxSize={iconSize} color='#3178C6' />
          <Text fontSize='sm' mt={2}>
            TypeScript
          </Text>
        </Flex>
       
        <Flex direction='column' align='center'>
          <Icon as={SiJavascript} boxSize={iconSize} color='yellow.400' />
          <Text fontSize='sm' mt={2}>
            JavaScript
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={SiExpo} boxSize={iconSize} color='#000020' />
          <Text fontSize='sm' mt={2}>
            Expo
          </Text>
        </Flex>
     
        <Flex direction='column' align='center'>
          <Icon as={SiSocketdotio} boxSize={iconSize} color='#010101' />
          <Text fontSize='sm' mt={2}>
            Socket.io
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={FaNodeJs} boxSize={iconSize} color='green.500' />
          <Text fontSize='sm' mt={2}>
            Node.js
          </Text>
        </Flex>
        {/* GitHub */}
        <Flex direction='column' align='center'>
          <Icon as={FaGithub} boxSize={iconSize} color='black' />
          <Text fontSize='sm' mt={2}>
            GitHub
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
