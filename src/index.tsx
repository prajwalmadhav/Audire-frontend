import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}