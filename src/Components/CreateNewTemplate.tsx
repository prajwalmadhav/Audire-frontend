import {
    chakra,
    Box,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    Heading,
    Select,
    Flex,
  } from "@chakra-ui/react";
  import { useCallback, useState } from "react";
  import { Calendar } from '@natscale/react-calendar';
  
  export default function Component() {
    const [value, setValue] = useState();
  
    const onChange = useCallback(
      (value) => {
        setValue(value);
      },
      [setValue],
    );
    return (
      
        <Flex >                {/*  //Container of whole dashboard */}
           <Box ml="18%" mr="70px" mt="10px"  >
           <Heading  mb="50px"  fontSize='25px'>
                          Create New Template
                        </Heading>
                        <Box 
          >   {/*  //Container Plan an audit form  */}
            
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
                    >
  
                      
                      <Stack
                        px={4}
                        py={5}
                        p={[null, 6]}
                        bg={useColorModeValue("white", "gray.700")}
                        spacing={6}
  
                      >
                        <Heading  mt="-10px"  fontSize='15px' fontWeight="10px">
                          Name of Template
                        </Heading>
                        
                        <SimpleGrid columns={6} spacing={6} >
  
                          {/* 1th row input form  */}
  
                          <FormControl as={GridItem} colSpan={[6, 3]} >
                            <FormLabel
                              htmlFor="first_name"
                              fontSize="lg"
                              fontWeight="xl"
                              color={useColorModeValue("gray.700", "gray.50")}
  
                            >
                            </FormLabel>
                            <Input
                              type="text"
                              name="first_name"
                              id="first_name"
                              autoComplete="given-name"
                              mt="-15px"
                              focusBorderColor="brand.400"
                              shadow="sm"
                              size="sm"
                              w="full"
                              h="40px"
                              rounded="md"
                              placeholder='Audit Type Name'
  
                            />
                            </FormControl>
  
                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="last_name"
                              fontSize="sm"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                            >
                              
                            </FormLabel>
                            <Input
                              type="text"
                              name="last_name"
                              id="last_name"
                              autoComplete="family-name"
                              mt="-10px"
                              focusBorderColor="brand.400"
                              shadow="sm"
                              size="sm"
                              w="full"
                              h="40px"
                              
                              rounded="md"
                              placeholder='Audit Sub-Type'
                              
  
                            />
                          </FormControl>
  
                          {/* 2th row input form  */}
  
  
                          <FormControl className="Upload" as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="first_name"
                              fontSize="md"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                              mt='10px'
                            >
                            Add Questions
                            </FormLabel>
                          <Button
                              type="submit"
                              size='md'
                              background="#F2A443"
                              color="white"
                              _focus={{ shadow: "" }}
                              fontWeight="md"
                              px="53px"
                              mt="-2px"
                          >
                              + Upload Template
                          </Button>
                            </FormControl>
  
                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="last_name"
                              fontSize="sm"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                              mt='10px'
                            >
                              
                            </FormLabel>
                            <FormLabel fontWeight={400}>Choose Answer Type</FormLabel>
                              <Select id='choice' placeholder='Yes | No | Maybe'>
                                  <option>Yes</option>
                                  <option>No</option>
                                  <option>Maybe</option>
                              </Select>
                          </FormControl>  
                          <FormControl className="Upload" as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="first_name"
                              fontSize="md"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                              mt='10px'
                            >
                            Generate QR Code
                            </FormLabel>
                          <Button
                              type="submit"
                              size='md'
                              background="#F2A443"
                              color="white"
                              _focus={{ shadow: "" }}
                              fontWeight="md"
                              px="85px"
                              mt="-2px"
                          >
                                  Genertate 
                          </Button>
                            </FormControl>
                          
                      </SimpleGrid>
                      </Stack>
  
                      <Box
                        px={{ base: 4, sm: 6, lg: 6 }}
                        py={3}
                        bg={useColorModeValue("white", "gray.900")}
                        textAlign="right"
                        mt='-14px'
                      >
                        <Button
                          type="submit"
                          size='md'
                          background="#F2A443"
                          color="white"
                          _focus={{ shadow: "" }}
                          fontWeight="md"
                          px="40px"
                          className="Submit"
                        >
                          Create
                        </Button>
                      </Box>
                    </chakra.form>
                  </GridItem>
                </SimpleGrid>
              </Box>
          </Box>
          </Box>
  
          <Box ml="1%" mr="70px" mt="18px"  >
                        <Box 
          >   {/*  //Container Plan an audit form  */}
            
              <Box  ml="-10px" mt="70px"  borderWidth='3px' 
                  borderRadius='lg' >
              
                <SimpleGrid
                  display={{ base: "initial", md: "grid",  }}
                  // columns={{ md: 3 , lg: 4}}
                  spacing={{ lg: 5 }}  
                  width= {{lg:'500px'}} 
                  
                >
  
                  <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                    <chakra.form
                      method="POST"
                      shadow="inner"
                      rounded={[null, "md"]}
                      overflow={{ sm: "hidden" }}
                    >
  
                      
                      <Stack
                        px={4}
                        py={5}
                        p={[null, 6]}
                        bg={useColorModeValue("white", "gray.700")}
                        spacing={6}
  
                      >
  
                        
                        <SimpleGrid columns={6} spacing={6} >
  
                          {/* 2th row input form  */}
  
  
                          <FormControl className="Upload" as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="first_name"
                              fontSize="md"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                              mt='5px'
                            >
                            Download Templates
                            </FormLabel>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color={useColorModeValue("gray.700", "gray.50")}
                              mt='5px'
                              mr="-10px"
                              width= {{lg:'450px'}} 
                            >
                            (Download templates fill according to the format and upload it while creating a new template)
                            </FormLabel>
                          <Button
                              type="submit"
                              size='md'
                              background="#F2A443"
                              color="white"
                              _focus={{ shadow: "" }}
                              fontWeight="md"
                              px="53px"
                              mt="-2px"
                          >
                              Download Template
                          </Button>
                            </FormControl>                       
                      </SimpleGrid>
                      </Stack>
  
                      
                    </chakra.form>
                  </GridItem>
                </SimpleGrid>
              </Box>
          </Box>
          </Box>
          
        </Flex>
  
      
    );
  }