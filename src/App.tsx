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
import NcStatus from "./Components/NcStatus";
import Qrcode from "./Components/Qrcode";
import Questions from "./Components/Questions";
import Template from "./Components/Template";
import Reports from "./Components/Reports";


export const App = () => {
  
  return (
    
    <ChakraProvider theme={theme}>
        
      <Router>
          <Sidebar children={undefined} />
          
        <Routes>
          {/* Sidebar for the inclusive pages */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/ncstatus' element={<NcStatus />} />
          <Route path='/template' element={<Template />} />
          <Route path='/qrcode' element={<Qrcode />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/reports' element={<Reports />} />

          <Route path='/test' element={<Test/>} />


        </Routes>

      </Router>
    </ChakraProvider>
  );
}

