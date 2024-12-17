import React from 'react'
import { Box, Heading, Text, Image, Flex, Icon } from '@chakra-ui/react'
import { HeroStack } from '../HeroStack/HeroStack'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTensorflow, SiTypescript } from 'react-icons/si'
export const Skills = () => {
  return (
    <Box flex='1'>
      <Box mb={6} p={4}>
        <Heading
          color='teal.500'
          textAlign='left'
          as='h2'
          size='lg'
          mt={0}
          fontWeight={500}
          fontSize={'25px'}
        >
          Tech Stack
        </Heading>

        {/* <Heading as='h2' size='lg' color='teal.500' textAlign='left' mt={7}>
          Skills
        </Heading> */}
        <HeroStack />

        {/* <Text fontSize='lg' color='gray.600' textAlign='justify' mt={3}>
          I have experience with various technologies such as:
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>HTML5, CSS3</li>
            <li>Express.js</li>
            <li>Git, GitHub</li>
          </ul>
        </Text> */}

        <Box mt={10}>
          <Heading
            as='h2'
            size='lg'
            mb={6}
            color='teal.500'
            textAlign='left'
            mt={0}
            fontWeight={500}
            fontSize={'20px'}
          >
            Education & Certifications
          </Heading>
          {/* Education List */}

          {/* Certification */}
          <Flex
            align='center'
            p={4}
            // border='1px solid #e2e8f0'
            borderRadius='md'
            boxShadow='sm'
          >
            <Image
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1734388672/the_power_logo_cjxbuy.jpg' // Link del logo o insignia de la institución
              alt='The Power Logo'
              boxSize='40px'
              objectFit='contain'
              mr={4}
              borderRadius={'full'}
            />
            <Box>
              <Text fontSize='md' fontWeight='bold'>
                Full-Stack Developer
              </Text>
              <Text fontSize='sm' color='gray.600'>
                The Power Tech School
              </Text>
            </Box>
          </Flex>
          <Flex direction='column' gap={6}>
            {/* Degree */}
            <Flex
              align='center'
              p={4}
              // border='1px solid #e2e8f0'
              borderRadius='md'
              boxShadow='sm'
            >
              <Image
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1734388724/logo-universidad-de-valparaiso_cwi3cq.webp' // Link del logo o insignia de la institución
                alt='The Power Logo'
                boxSize='40px'
                objectFit='contain'
                mr={4}
              />
              <Box>
                <Text fontSize='md' fontWeight='bold'>
                  Bachelor's Degree in Public Administration
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  Universidad de Valparaíso
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box mt={10}>
          <Heading
            as='h2'
            size='lg'
            mb={6}
            color='teal.500'
            textAlign='left'
            mt={0}
            fontWeight={500}
            fontSize={'20px'}
          >
            Ongoing Learning Journey
          </Heading>

          {/* Tecnologías */}
          <Box mt={4}>
            <Heading
              as='h4'
              size='md'
              mb={6}
              color='teal.500'
              textAlign='left'
              mt={0}
              fontWeight={300}
              fontSize={'15px'}
            >
              Tech:
            </Heading>

            <Flex mt={3} gap={6} wrap='wrap'>
              {/* React */}
              {/* <Flex direction='column' align='center'>
                <Icon as={FaReact} boxSize={8} color='teal.500' />
                <Text fontSize='sm' mt={2}>
                  React
                </Text>
              </Flex> */}
              <Flex direction='column' align='center' ml={3}>
                <Icon as={SiTypescript} boxSize={8} color='blue.500' />
                <Text fontSize='sm' mt={2}>
                  TypeScript
                </Text>
              </Flex>
              {/* Next.js */}
              <Flex direction='column' align='center'>
                <Icon as={SiNextdotjs} boxSize={8} color='black' />
                <Text fontSize='sm' mt={3}>
                  Next.js
                </Text>
              </Flex>
            </Flex>

            {/* <Flex direction='column' align='center'>
              <Icon as={SiTensorflow} boxSize={8} color='orange.500' />
              <Text fontSize='sm' mt={2}>
                AI Tools
              </Text>
            </Flex> */}
          </Box>

          <Box mt={8}>
            <Heading
              as='h4'
              size='md'
              mb={6}
              color='teal.500'
              textAlign='left'
              mt={0}
              fontWeight={300}
              fontSize={'15px'}
            >
              Course
            </Heading>
            <Text fontSize='lg' color='gray.600' textAlign='justify' mt={3}>
              I'm currently taking a course in Artificial Intelligence,
              exploring how to use various AI tools to increase efficiency and
              innovation in solution development.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
