import { useColorMode, Image, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  const { colorMode } = useColorMode() // Chakra detecta el tema actual: 'light' o 'dark'

  return (
    <Link as={NavLink} to='/' _hover={{ textDecoration: 'none' }}>
      <Image
        src={
          colorMode === 'light'
            ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1711666423/Portafolio/logo_1_bivhav.png'
            : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png'
        }
        alt='Logo'
        boxSize='35px'
        objectFit='contain'
      />
    </Link>
  )
}

export default Logo
