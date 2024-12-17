import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Components/Theme/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </BrowserRouter>
)
