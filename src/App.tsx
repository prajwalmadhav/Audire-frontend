import * as React from "react"
import { Route } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Homepage from "./Components/Homepage";

export const App = () => {
  const curUrl = window.location.pathname
  console.log(curUrl)
  return (    
    <Homepage children={undefined}/>
    );
}
