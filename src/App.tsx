import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react"
import './App.css';
import Homepage from "./Components/Homepage";

function App() {
  return (
    <>
      <Homepage children={undefined}/>
    </>
  );
}

export default App;
