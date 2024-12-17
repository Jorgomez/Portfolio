import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  List,
  ListItem,
  Link,
  IconButton
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons' //
import { FaGithub } from 'react-icons/fa'

export const ProjectCard = ({
  title,
  description,
  technologies,
  year,
  liveLink,
  codeLink,
  imgFront,
  imgBack
}) => {
  return (
    <Box
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      border='1px solid'
      borderColor='gray.300'
      borderRadius='md'
      boxShadow='sm'
      w={{ base: '90%', md: '80%', lg: '100%' }}
      p={2}
      transition='transform 0.3s ease-in-out'
      _hover={{ transform: 'scale(1.05)' }}
      m={'auto'}
    >
      <Box
        w={{ base: '100%', md: '50%' }}
        h={{ base: '200px', md: 'auto' }}
        position='relative'
        overflow='hidden'
        perspective='1000px'
        mt={{ base: '1', md: '0' }}
      >
        <Box
          w='95%'
          h='100%'
          position='relative'
          style={{ transformStyle: 'preserve-3d' }}
          transition='transform 0.6s'
          _hover={{ transform: 'rotateY(180deg)' }}
          m='auto'
        >
          {/* Cara Frontal */}
          <Box
            p={10}
            backgroundImage={`url(${imgFront})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            sx={{
              backfaceVisibility: 'hidden'
            }}
            border={'1px solid grey'}
            borderRadius='lg'
            w='100%'
            h='100%'
            position='absolute'
            left='50%'
            top='50%'
            transform='translate(-50%, -50%) rotateY(0deg)'
          />

          {/* Cara Trasera */}
          <Box
            backgroundImage={`url(${imgBack})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            sx={{
              backfaceVisibility: 'hidden'
            }}
            borderRadius='lg'
            w='100%'
            h='100%'
            position='absolute'
            left='50%'
            top='50%'
            transform='translate(-50%, -50%) rotateY(180deg)' // Trasero visible en rotación
          />
        </Box>
      </Box>

      {/* Contenedor de Información */}
      <Box
        w={{ base: '95%', md: '50%' }}
        h={{ base: '50%', md: '95%' }}
        margin={'auto'}
        // pl={{ lg: 6 }}
        display='flex'
        flexDirection='column'
        // justifyContent='space-between'
        // border={'1px solid'}
        textAlign={'justify'}
        pt={{ base: '2', md: '0' }}
      >
        {/* Título */}
        <Heading
          as='h3'
          fontSize={{ base: 'md', lg: 'lg' }}
          color='teal.600'
          mb={2}
        >
          {title}
        </Heading>

        <Text
          fontSize={{ base: '12px', lg: '13px' }}
          color='gray.600'
          _dark={{ color: 'gray.400' }}
          mb={{ base: '2', md: '4' }}
        >
          {description}
        </Text>

        <List
          mb={{ base: '0', md: '2' }}
          fontSize={{ base: '12px', lg: '13px' }}
        >
          <ListItem color='gray.600' _dark={{ color: 'gray.400' }}>
            <Text
              as='span'
              fontWeight='700'
              color='gray.600'
              _dark={{ color: 'white' }}
            >
              Technologies:
            </Text>{' '}
            {technologies.join(', ')}
          </ListItem>
          <ListItem color='gray.600' _dark={{ color: 'gray.400' }}>
            <Text
              as='span'
              fontWeight='700'
              color='gray.600'
              _dark={{ color: 'gray.400' }}
            >
              Year:
            </Text>{' '}
            {year}
          </ListItem>
        </List>

        {/* Botones */}
        <HStack spacing={6} fontSize={{ base: '12px', lg: '13px' }} m={'auto'}>
          {/* Enlace al sitio web */}
          <ChakraLink href={liveLink} isExternal>
            <ChakraLink color='teal.400'>
              Visit Page <ExternalLinkIcon ml={0} />
            </ChakraLink>
          </ChakraLink>

          {/* Enlace a GitHub con ícono */}
          <ChakraLink href={codeLink} isExternal>
            <IconButton
              icon={<FaGithub />}
              aria-label='View Code'
              colorScheme='gray'
              variant='outline'
              size={{ base: 'xs', lg: 'sm' }}
            />
          </ChakraLink>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProjectCard
