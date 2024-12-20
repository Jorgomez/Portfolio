import React from 'react'
import {
  Button,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  Image,
  useBreakpointValue,
  Tooltip,
  useColorMode
} from '@chakra-ui/react'

export const Footer = () => {
  const iconSize = useBreakpointValue({ base: '15px', md: '20px' })
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const { colorMode } = useColorMode()
  return (
    <footer>
      <Flex
        direction='column'
        align='center'
        justify='center'
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} // Cambia según el
        color={colorMode === 'light' ? 'white' : 'gray.800'}
        p={4}
        mt={10}
        borderTop='1px solid'
        borderColor={colorMode === 'light' ? 'gray.300' : 'gray.700'} // Cambia según el tema
      >
        <Button
          onClick={scrollToTop}
          bg='teal.400'
          color='white'
          _hover={{ bg: 'teal.500' }}
          mb={3}
          p={1}
          borderRadius='50%'
          size={2}
        >
          {' '}
          <Tooltip label='Back to top' fontSize='sm' placement='top'>
            <Image
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1712095485/Portafolio/ic_baseline-double-arrow_uazq6c.png'
              alt='Back-to-top'
              boxSize='20px'
            />
          </Tooltip>
        </Button>

        <List display='flex' gap={6} mb={4}>
          <ListItem>
            <Tooltip
              label='Visit LinkedIn Profile'
              fontSize='sm'
              placement='top'
            >
              <a
                href='https://www.linkedin.com/in/jorgomezm/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={
                    colorMode === 'light'
                      ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1711676272/Portafolio/Vector_2_bjmtbe.png'
                      : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711815171/Portafolio/Vector_5_ze3gnd.png'
                  }
                  alt='LinkedIn Icon'
                  boxSize={iconSize}
                />
              </a>
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip label='Visit GitHub Profile' fontSize='sm' placement='top'>
              <a
                href='https://github.com/Jorgomez'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={
                    colorMode === 'light'
                      ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1711676268/Portafolio/Vector_1_fzajzj.png'
                      : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711814985/Portafolio/Vector_4_jff8k8.png'
                  }
                  alt='GitHub Icon'
                  boxSize={iconSize}
                  // bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
                />
              </a>
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip label='Contact Me' fontSize='sm' placement='top'>
              <a href='mailto:Jorgomez@protonmail.com'>
                <Image
                  src={
                    colorMode === 'light'
                      ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1711676273/Portafolio/Vector_pglbys.png'
                      : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711814986/Portafolio/Vector_3_rivw1h.png'
                  }
                  alt='Email Icon'
                  boxSize={iconSize}
                />
              </a>
            </Tooltip>
          </ListItem>
        </List>

        {/* Copyright y texto */}
        <Text
          fontSize='13'
          color={colorMode === 'light' ? 'gray.400' : 'gray.600'}
        >
          @2024 - <strong>MYPORTFOLIO </strong> by JorGomez
        </Text>
      </Flex>
    </footer>
  )
}

export default Footer
