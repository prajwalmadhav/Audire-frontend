import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { BrowserRouter as Router, Route,Link, Routes, Outlet } from 'react-router-dom'

import Sidebar from "./Components/Sidebar";
import Calender from './Components/Calender';
import Dashboard from "./Components/Dashboard";
import Test from './Components/Test';
import Table from "./Components/Table";
<<<<<<< HEAD
=======

>>>>>>> b8a6b5c93a1a8dc3df8bda8d5ef32493e38303a6

export const App = () => {
  
  return (
    
    <ChakraProvider theme={theme}>
        
      <Router>
          <Sidebar children={undefined} />
          
        <Routes>
          {/* Sidebar for the inclusive pages */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/test' element={<Test/>} />
          <Route path='/pg' element={<Table/>} />
<<<<<<< HEAD
=======

>>>>>>> b8a6b5c93a1a8dc3df8bda8d5ef32493e38303a6

        </Routes>

      </Router>
    </ChakraProvider>
  );
}

