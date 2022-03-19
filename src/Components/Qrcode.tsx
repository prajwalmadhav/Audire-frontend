import {
  Flex,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Heading,
  IconButton,
  ButtonGroup,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Box,
  InputRightElement,
  Badge,
} from "@chakra-ui/react";
import {
  chakra,
  Image,
  Link,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { Search2Icon } from "@chakra-ui/icons";

export default function Component() {
  const data = [
    
  ];
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

   return (
    <Flex
      w="85%"
      bg="white"
      p={50}
      alignItems="center"
      justifyContent="center"
      ml= {210}
      >
      
      
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
      >
          <Flex
              direction={{ base: "row", md: "column" , lg: "column" }}
          >
            <Heading  mb={"4rem"} mt={-30} fontSize='30px'>
              QR Code
            </Heading>
          </Flex>

          {/* searching fields */}
          <Stack  >
            <HStack spacing={10} mb={20} >
              <Box >
                <InputGroup>
                  <InputRightElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.300' />}
                  />
                  <Input type='search' placeholder='Search' />
                </InputGroup>
              </Box>
              <Box >
                <InputGroup>
                  <Input type='search' placeholder='Audit Type' />
                </InputGroup>
              </Box>
              <Box >
                <InputGroup>           
                  <Input type='search' placeholder='Audit Sub-Type' />
                </InputGroup>
              </Box>
            </HStack>
          </Stack>

          
          <SimpleGrid 
            columns={{sm: 2, md: 3, lg: 4}} 
            spacing='60px' >
              {/* First qr box  */}
            <Box fontSize='xl' alignItems='center' justifyContent='center'>
              {/* Compailance Audit */}
            
              <Box bg='gray.50'
                display='flex' 
                maxW='lg'
                alignItems='center'
                justifyContent='center'
                h='250px'
                borderWidth='3px' 
                borderRadius='lg' 
                overflow='hidden' > 
                
                <Image boxSize='250px'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
                alt='Qr Code 1' />
                  
              </Box>
            </Box>

            {/* 2nd qr box  */}
            <Box bg='gray.50'
              display='flex' 
              maxW='lg'
              alignItems='center'
              justifyContent='center'
              h='250px'
              borderWidth='3px' 
              borderRadius='lg' 
              overflow='hidden' > 
              <Image boxSize='250px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
               alt='Qr Code 1' />
            </Box>

            {/* 3rd qr box  */}
            <Box bg='gray.50'
              display='flex' 
              maxW='lg'
              alignItems='center'
              justifyContent='center'
              h='250px'
              borderWidth='3px' 
              borderRadius='lg' 
              overflow='hidden' > 
              <Image boxSize='250px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
               alt='Qr Code 1' />
            </Box>

            {/* 4th qr box  */}
            <Box bg='gray.50'
              display='flex' 
              maxW='lg'
              alignItems='center'
              justifyContent='center'
              h='250px'
              borderWidth='3px' 
              borderRadius='lg' 
              overflow='hidden' > 
              <Image boxSize='250px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
               alt='Qr Code 1' />
            </Box>

            {/* 5th qr box  */}
            <Box bg='gray.50'
              display='flex' 
              maxW='lg'
              alignItems='center'
              justifyContent='center'
              h='250px'
              borderWidth='3px' 
              borderRadius='lg' 
              overflow='hidden' > 
              <Image boxSize='250px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
               alt='Qr Code 1' />
            </Box>

            {/* 6th qr box  */}
            <Box bg='gray.50'
              display='flex' 
              maxW='lg'
              alignItems='center'
              justifyContent='center'
              h='250px'
              borderWidth='3px' 
              borderRadius='lg' 
              overflow='hidden' > 
              <Image boxSize='250px'
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7qLD3RFMHR87e774UkgOiIvhym2ed7O8_H8wJJhoo0MwuBIihYmLx0rqPyhvRoIWjfs&usqp=CAU' 
               alt='Qr Code 1' />
            </Box>
                 
                     
          </SimpleGrid>

      </Stack>



    </Flex>
  );
}