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
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Calendar from 'react-calendar';

// function App() {
//   const [date, setDate] = useState(new Date());

//   <Box >
//           <div className='app'>
//             <h1 className='text-center'>React Calendar</h1>
//             <div className='calendar-container'>
//               <Calendar onChange={setDate} value={date} />
//             </div>
//             <p className='text-center'>
//               <span className='bold'>Selected Date:</span>{' '}
//               {date.toDateString()}
//             </p>
//           </div>
          

//         </Box>

// }


export default function Component() {
  return (
    <>
      <Flex >
        
        <Box  >   {/*  //Container of whole dashboard */}
          
            <Box  ml="760px" mt="10px" >
              <SimpleGrid
                display={{ base: "initial", md: "grid", lg:"initial" }}
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
                    <Textarea size='sm' placeholder='Note (max 40 words)'
                      focusBorderColor="brand.400"
                      shadow="sm"
                      rounded="md"
                    />

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
                      >
                        Create
                      </Button>
                    </Box>
                  </chakra.form>
                </GridItem>
              </SimpleGrid>
            </Box>

        </Box>
      </Flex>
    </>
  );
}