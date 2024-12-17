// import { useColorMode, Button, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Tooltip
      label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      hasArrow
    >
      <IconButton
        aria-label='Toggle theme'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant='ghost'
        size='md'
        isRound
      />
    </Tooltip>
  )
}
