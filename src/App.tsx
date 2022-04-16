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
import Report from "./Components/Report";
import Settings from "./Components/Settings";
import LoginPage from "./Components/LoginPage";
import AuditTemplates from "./Components/AuditTemplates";
import CreateNewTemplate from "./Components/CreateNewTemplate";
import ComplianceAudit from "./Components/ComplianceAudit";


export const App = () => {
  
  return (
    
    <ChakraProvider theme={theme}>
        
      <Router>
        
          <Sidebar children={undefined} />
          
        <Routes>
          {/* Sidebar for the inclusive pages */}
          <Route path='/login' element={<LoginPage />} />
          
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<Calender />} />
          <Route path='/ncstatus' element={<NcStatus />} />
          <Route path='/audittemplates' element={<AuditTemplates />} />

          <Route path='/qrcode' element={<Qrcode />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/reports' element={<Report />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/create' element={<CreateNewTemplate />} />
          <Route path='/comp' element={<ComplianceAudit />} />

          <Route path='/test' element={<Test/>} />


        </Routes>

      </Router>
    </ChakraProvider>
  );
}