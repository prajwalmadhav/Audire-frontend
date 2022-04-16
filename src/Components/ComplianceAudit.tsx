import {
    Flex,
    useColorModeValue,
    Stack,
    SimpleGrid,
    Heading,
    IconButton,
    ButtonGroup,
    Input,
    Select,
    InputGroup,
    InputLeftElement,
    HStack,
    Button,
    Box,
    InputRightElement,
    FormControl,
    FormLabel,
    GridItem,
    Badge,
    Icon,
  } from "@chakra-ui/react";
  import {
    chakra,
    Image,
    Link,
  } from "@chakra-ui/react";
  import { AiFillEdit } from "react-icons/ai";
  import { Search2Icon } from "@chakra-ui/icons";
import { FiEdit2 } from "react-icons/fi";
const data = {
  name: 'Add New Template',
  date: 21,
  numReviews: 34
};

  export default function Component() {
   
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
              <Heading  mb={"4rem"} mt={-30} fontSize='30px' fontWeight="400px">
                Compliance Audit 

              </Heading>
            </Flex>

            {/* searching fields */}
            <Stack  >
              <HStack spacing={10} mb={20} ml={'50%'} bg="gray.100" rounded='lg' pl={5} py={5}>
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
            <Box  ml="0px" mt="50px"  borderWidth='3px' 
                borderRadius='lg' >
            
              <SimpleGrid
                display={{ base: "initial", md: "grid",  }}
                // columns={{ md: 3 , lg: 4}}
                spacing={{ lg: 5 }}  
                width= {{lg:'550px'}} 
                
              >

                <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                  <chakra.form
                    method="POST"
                    shadow="inner"
                    rounded={[null, "md"]}
                    overflow={{ sm: "hidden" }}
                    mt="1px"
                  >

                    
                    <Stack
                      px={4}
                      py={5}
                      p={[null, 6]}
                      width= {{lg:'1000px'}} 
                      bg={useColorModeValue("white", "gray.700")}
                      spacing={6}
                      

                    >
                      <SimpleGrid columns={20} spacing={6} >

                        {/* 1th row input form  */}

                        <FormControl as={GridItem} colSpan={[6]} >
                          <FormLabel
                            fontSize="lg"
                            fontWeight="xl"
                            color={useColorModeValue("gray.700", "gray.50")}
                            width= {{lg:'965px'}} 
                            borderWidth='2px' 
                            borderRadius='md'

                          >
                              
                              Question 1 <br></br>
                              
                              Has the organization determined internal and external issues relavent to its purpose and strategic direction? if yes, how?
                              <br></br>
                          </FormLabel>
                          
                          </FormControl>

                        
                    </SimpleGrid>
                    </Stack>

                    <Stack
                      px={4}
                      py={5}
                      p={[null, 6]}
                      width= {{lg:'1000px'}} 
                      bg={useColorModeValue("white", "gray.700")}
                      spacing={6}
                      mt='-40px'
                      

                    >
                      
                      
                      <SimpleGrid columns={20} spacing={6} >
                        <FormControl as={GridItem} colSpan={[6]} >
                          <FormLabel
                            fontSize="lg"
                            fontWeight="xl"
                            color={useColorModeValue("gray.700", "gray.50")}
                            width= {{lg:'965px'}} 
                            borderWidth='2px' 
                            borderRadius='md'
                            mt="1px"

                          >
                              
                              Question 3 <br></br>
                              
                              Has the organization determined internal and external issues relavent to its purpose and strategic direction? if yes, how?
                              <br></br>
                          </FormLabel>
                          
                          </FormControl>

                        
                        
                    </SimpleGrid>
                    </Stack>
                    <Stack
                      px={4}
                      py={5}
                      p={[null, 6]}
                      width= {{lg:'1000px'}} 
                      bg={useColorModeValue("white", "gray.700")}
                      spacing={6}
                      

                    >
                      <SimpleGrid columns={20} spacing={6} >

                        {/* 1th row input form  */}

                        <FormControl as={GridItem} colSpan={[6, 3]} width= {{lg:'300px'}} mt='-40px' >
                          
                            <Select id='choice' placeholder='Answer Type'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Select>
                        </FormControl> 

                        
                    </SimpleGrid>
                    </Stack>
                    
            

                  </chakra.form>
                </GridItem>
              </SimpleGrid>
            </Box>
            
            
  
        </Stack>
  
  
  
      </Flex>
    );
  }