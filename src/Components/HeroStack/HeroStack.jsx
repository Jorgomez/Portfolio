import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'

export const HeroStack = ({ iconSize = 10 }) => {
  return (
    <Box mt={10} ml={4}>
      {/* <Text fontSize='m' fontWeight='bold' mb={4}>
        Tech Stack
      </Text> */}
      <Flex justify='flex-start' gap={6} mt={4} wrap='wrap'>
        <Flex direction='column' align='center'>
          <Icon as={FaReact} boxSize={iconSize} color='teal.500' />
          <Text fontSize='sm' mt={2}>
            React
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={FaNodeJs} boxSize={iconSize} color='green.500' />
          <Text fontSize='sm' mt={2}>
            Node.js
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={FaHtml5} boxSize={iconSize} color='orange.500' />
          <Text fontSize='sm' mt={2}>
            HTML5
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={FaCss3Alt} boxSize={iconSize} color='blue.500' />
          <Text fontSize='sm' mt={2}>
            CSS3
          </Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Icon as={SiJavascript} boxSize={iconSize} color='yellow.400' />
          <Text fontSize='sm' mt={2}>
            JavaScript
          </Text>
        </Flex>
        {/* GitHub */}
        <Flex direction='column' align='center'>
          <Icon as={FaGithub} boxSize={iconSize} color='black' />
          <Text fontSize='sm' mt={2}>
            GitHub
          </Text>
        </Flex>
        {/* <Flex direction='column' align='center'>
          <Icon as={SiExpress} boxSize={iconSize} color='gray.500' />
          <Text fontSize='sm' mt={2}>
            Express.js
          </Text>
        </Flex> */}
      </Flex>
    </Box>
  )
}
