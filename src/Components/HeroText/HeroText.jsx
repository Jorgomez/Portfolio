import React from 'react'
import {
  Box,
  Text,
  Heading,
  Button,
  IconButton,
  HStack,
  Link
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HeroStack } from '../HeroStack/HeroStack'
import { HeroImage } from '../HeroImage/HeroImage'

export const HeroText = () => {
  return (
    <Box
      w={{ base: '100%', md: '40%' }}
      mx='auto'
      mt={{ base: '15px', md: '35px' }}
      textAlign={{ base: 'justify', md: 'left' }}
      // border={'1px solid'}
    >
      <Text
        fontSize={{ base: '12px', sm: 'sm', md: 'md', lg: 'lg' }}
        color='gray.600'
        _dark={{ color: 'gray.300' }}
        mb={{ base: 0, md: 3 }}
        // border={'1px solid'}
      >
        Hi, I'm,
      </Text>

      <Heading
        as='h1'
        fontSize={{
          base: '2xl',
          sm: '2.5xl',
          md: '3xl',
          lg: '4xl'
        }}
      >
        Jorge Gómez
      </Heading>

      <Text
        fontSize={{
          base: '13px', // Tamaño para pantallas pequeñas
          sm: 'md',
          md: 'lg',
          lg: 'xl' // Tamaño grande
        }}
        color='gray.600'
        _dark={{ color: 'gray.300' }}
        mt={{ base: 1, md: 4 }}
        mb={4}
      >
        <Box
          as='span'
          sx={{
            color: '#319795',
            fontWeight: 'bold',
            fontSize: {
              base: '1rem',
              md: '1.5rem'
            }
          }}
        >
          Full Stack Developer
        </Box>{' '}
        based in Spain, passionate about building accessible and user-friendly
        websites.
      </Text>

      <HeroImage display={{ base: 'block', md: 'none' }} />

      <HStack
        spacing={4}
        mt={4}
        justify={{ base: 'center', md: 'flex-start' }}
        pb={5}
      >
        <Button
          rightIcon={<EmailIcon />}
          colorScheme='teal'
          variant='solid'
          size='md'
          onClick={() =>
            (window.location.href = 'mailto:Jorgomez@protonmail.com')
          }
        >
          Contact Me
        </Button>

        {/* Botón de LinkedIn */}
        <Link href='https://www.linkedin.com/in/jorgomezm/' isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label='LinkedIn profile'
            colorScheme='gray'
            size='md'
            variant='outline'
          />
        </Link>

        {/* Botón de GitHub */}
        <Link href='https://github.com/Jorgomez' isExternal>
          <IconButton
            icon={<FaGithub />}
            aria-label='GitHub profile'
            colorScheme='gray'
            size='md'
            variant='outline'
          />
        </Link>
      </HStack>

      <HeroStack iconSize={5} />
    </Box>
  )
}

export default HeroText
