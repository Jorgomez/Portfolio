import React from 'react'
import { Box, Image } from '@chakra-ui/react'

export const HeroImage = ({ display }) => {
  return (
    <Box
      w={{ base: '100%', md: '40%' }}
      mx='auto'
      mt={1}
      display={display || 'flex'}
      justifyContent='center'
      alignItems='center'
    >
      <Image
        src='https://res.cloudinary.com/digcf0lad/image/upload/v1734464593/Profile%20photos/untitled%20folder/IMG_7717-2_mjjsbb.webp'
        alt='Hero Image'
        borderRadius='lg'
        objectFit='cover'
        boxShadow='lg'
        w={{ base: '100%', md: '90%' }}
        h='auto'
      />
    </Box>
  )
}
