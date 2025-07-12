import React from 'react'
import {
  Box,
  Text,
  Heading,
  Button,
  IconButton,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HeroStack } from '../HeroStack/HeroStack'
import { HeroImage } from '../HeroImage/HeroImage'
import { logEvent } from '../../../analytics'

export const HeroText = () => {
  const handleButtonClick = () => {
    logEvent('User Interaction', 'Click', 'Contact Button')
    window.location.href = 'mailto:Jorgomez@protonmail.com'
  }

  const handleCVDownload = (language) => {
    logEvent('User Interaction', 'Click', `CV Download - ${language}`)
    const cvUrl =
      language === 'es' ? '/CV_JORGOMEZ_SP.L.pdf' : '/CV_JORGOMEZ_EN..pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = `CV_${language}.pdf`
    link.click()
  }
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
        Hi, I'm 
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
          base: '13px',
          sm: 'md',
          md: 'lg',
          lg: 'xl'
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
        based in Madrid, Spain, passionate about building modern  mobile and web  applications.
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
          // size='md'
          onClick={handleButtonClick}
          fontSize={{
            base: '10px !important',
            sm: '13px !important',
            md: '15px !important'
          }}
          size={{ base: 'sm', md: 'md' }}
        >
          Contact Me
        </Button>

        {/* Botón de LinkedIn */}
        <Link href='https://www.linkedin.com/in/jorgomezm/' isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label='LinkedIn profile'
            colorScheme='gray'
            size={{ base: 'sm', md: 'md' }}
            variant='outline'
            onClick={() =>
              logEvent('User Interaction', 'Click', 'linkedin Button')
            }
          />
        </Link>

        {/* Botón de GitHub */}
        <Link href='https://github.com/Jorgomez' isExternal>
          <IconButton
            icon={<FaGithub />}
            aria-label='GitHub profile'
            colorScheme='gray'
            size={{ base: 'sm', md: 'md' }}
            variant='outline'
            onClick={() =>
              logEvent('User Interaction', 'Click', 'GitHub Button')
            }
          />
        </Link>
        <Popover>
          <PopoverTrigger>
            <Button
              colorScheme='teal'
              variant='outline'
              size={{ base: 'sm', md: 'md' }}
              fontSize={{
                base: '10px !important',
                sm: '13px !important',
                md: '15px !important'
              }}
            >
              Download CV
            </Button>
          </PopoverTrigger>
          <PopoverContent width={{ base: '100px', md: '140px' }}>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverBody>
              <Button
                colorScheme='teal'
                size={{ base: 'xs', md: 'sm' }}
                fontSize={{
                  base: '10px !important',
                  md: '13px !important'
                }}
                w='100%'
                onClick={() => handleCVDownload('en')}
                mb={2}
              >
                English
              </Button>
              <Button
                colorScheme='teal'
                size={{ base: 'xs', md: 'sm' }}
                fontSize={{
                  base: '10px !important',
                  md: '13px !important'
                }}
                w='100%'
                onClick={() => handleCVDownload('es')}
              >
                Spanish
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <HeroStack iconSize={5} />
    </Box>
  )
}

export default HeroText
