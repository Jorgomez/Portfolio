import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as='header'
      bg='gray.100'
      _dark={{ bg: 'gray.800' }}
      px={4}
      py={2}
      shadow='md'
      // border='1px solid'
      align='center'
      maxW='100%'
      mx='auto'
      display='flex'
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
    >
      <Flex align='center' ml={7}>
        <Logo />
      </Flex>

      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label='Toggle navigation'
        onClick={isOpen ? onClose : onOpen}
        order={{ base: 2, md: 1 }}
      />

      <HStack
        as='nav'
        spacing={7}
        display={{ base: 'none', md: 'flex' }}
        alignItems='center'
        flex='1'
        ml={4}
      >
        <Link
          as={NavLink}
          to='/'
          _hover={{ textDecoration: 'underline' }}
          _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
        >
          Home
        </Link>
        <Link
          as={NavLink}
          to='/Project'
          _hover={{ textDecoration: 'underline' }}
          _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
        >
          Projects
        </Link>
        <Link
          as={NavLink}
          to='/About'
          _hover={{ textDecoration: 'underline' }}
          _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
        >
          About Me
        </Link>
      </HStack>

      <Flex align='center' mr={4} order={{ base: 1, md: 1 }}>
        {' '}
        <ThemeSwitcher />
      </Flex>

      {isOpen && (
        <VStack
          as='nav'
          spacing={4}
          position='absolute'
          top='60px'
          left={0}
          w='100%'
          bg='gray.100'
          _dark={{ bg: 'gray.800' }}
          px={4}
          py={2}
          shadow='md'
          zIndex={10}
        >
          <Link
            as={NavLink}
            to='/'
            _hover={{ textDecoration: 'underline' }}
            _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            as={NavLink}
            to='/Project'
            _hover={{ textDecoration: 'underline' }}
            _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
            onClick={onClose}
          >
            Projects
          </Link>
          <Link
            as={NavLink}
            to='/About'
            _hover={{ textDecoration: 'underline' }}
            _activeLink={{ fontWeight: 'bold', color: 'teal.500' }}
            onClick={onClose}
          >
            About
          </Link>
        </VStack>
      )}
    </Box>
  )
}

export default Header
