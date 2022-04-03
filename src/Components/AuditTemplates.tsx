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
                Audit Templates
              </Heading>
            </Flex>

            {/* searching fields */}
            <Stack  >
              <HStack spacing={10} mb={20} ml={'50%'} bg="gray.100" rounded='lg' py={5}>
                <Box >

                  {/* <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='search' placeholder='Audit Type' />
                  </InputGroup> */}

                </Box>

                <Box >
                  <InputGroup bg='white' rounded='xl'>
                    <Input type='search' placeholder='Audit Type' />
                  </InputGroup>
                </Box>
                <Box >
                  <InputGroup bg='white' rounded='xl'>
                    <Input type='search' placeholder='Audit Sub-Type' />
                  </InputGroup>
                </Box>
                
              </HStack>
            </Stack>
  
            
            <SimpleGrid 
              columns={{sm: 2, md: 3, lg: 4}} 
              spacing='60px'>
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
                  borderRadius='50' 
                  overflow='hidden' > 

                    <Stack >


                    </Stack>

                </Box>
              </Box>             
                       
            </SimpleGrid>
  
        </Stack>
  
  
  
      </Flex>
    );
  }