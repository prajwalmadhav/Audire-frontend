import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { BrowserRouter as Router, Route,Link, Routes, Outlet } from 'react-router-dom'

import Sidebar from "./Components/Sidebar";
import Homepage from "./Components/Homepage";

export const App = () => {
  
  return (
    
    <ChakraProvider theme={theme}>
        
      <Router>
          <Sidebar children={undefined} />
          
        <Routes>
          {/* Sidebar for the inclusive pages */}
          <Route path='home' element={<Homepage />} />
          <Route path='test' element={<Homepage/>} />
          <Route path='pg' element={<Homepage/>} />

        </Routes>

      </Router>
    </ChakraProvider>
  );
}

