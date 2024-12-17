import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { HeroImage } from '../../Components/HeroImage/HeroImage'
import HeroText from '../../Components/HeroText/HeroText'

export const Home = () => {
  return (
    <Box
      as='main'
      w='90%'
      minHeight='88vh'
      px={6}
      py={{ base: 0, md: 6 }}
      display='flex'
      alignItems='center'
      // border='1px solid'
      margin={'auto'}
      mt={0}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify='center'
        wrap='wrap'
        gap={8}
        w='100%'
        h='100%'
        // border='1px solid'
      >
        <HeroText />

        <HeroImage display={{ base: 'none', md: 'block' }} />
      </Flex>
    </Box>
  )
}
