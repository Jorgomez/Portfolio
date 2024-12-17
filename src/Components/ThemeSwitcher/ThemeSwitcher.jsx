// import { useColorMode, Button, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode() // Chakra hook para gestionar temas

  return (
    <IconButton
      aria-label='Toggle theme'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant='ghost'
      size='md'
      isRound
    />
  )
}
