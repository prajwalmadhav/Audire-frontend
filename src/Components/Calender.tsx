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
  Divider,
  Center,
  VStack,
} from "@chakra-ui/react";

export default function Component() {
  return (
    <>
    
        
      
        
      

        <Box mr="-450px" ml="750px" mt="20px" >
          <SimpleGrid
            display={{ base: "initial", md: "grid", lg:"flex-end" }}
            columns={{ md: 3 , lg: 4}}
            spacing={{ md: 6 }}
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
                  
                  <Heading as='h3' size='md' mb="-20px" color="grey" fontSize='20px'>
                    Plan an Audit
                  </Heading>
                  
                  <SimpleGrid columns={6} spacing={6}>

                    {/* 1th row input form  */}

                    <FormControl as={GridItem} colSpan={[6, 3]}>
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
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Start Date'

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
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='End Date'

                      />
                    </FormControl>

                    {/* 2th row input form  */}


                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                       
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Audit Type'

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
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Audit Sub-type'

                      />
                    </FormControl>


                    {/* 3th row input form  */}
                    

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Department'

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
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Auditor Name'

                      />
                    </FormControl>
                    {/* 4th row input form  */}
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Country'

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
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        placeholder='Location'
                        
                      />
                    </FormControl>

                      
                  </SimpleGrid>
                <Textarea size='sm' placeholder='Note (Max40 Words)' />

                </Stack>
                <Box
                  px={{ base: 4, sm: 6, lg: 6 }}
                  py={3}
                  bg={useColorModeValue("white", "gray.900")}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    size='md'
                    background="#F2A443"
                    color="white"
                    _focus={{ shadow: "" }}
                    fontWeight="md"
                    px="40px"
                  >
                    Create
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

      

        
      

      

    </>
  );
}