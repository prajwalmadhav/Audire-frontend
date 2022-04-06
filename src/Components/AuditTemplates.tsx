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
              <Heading  mb={"4rem"} mt={-30} fontSize='30px'>
                Audit Templates
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
  
            
            <SimpleGrid 
              columns={{sm: 2, md: 3, lg: 4}} 
              spacing='60px'>
                {/* First qr box  */}
              <Flex fontSize='xl' alignItems='center' ml={{base:0,lg:'15%'}} justifyContent='center'>
                {/* Compailance Audit */}
              
                {/* <Box bg='gray.50'
                  display='flex' 
                  maxW='lg'
                  alignItems='center'
                  justifyContent='center'
                  h='250px'
                  borderWidth='3px' 
                  borderRadius='50' 
                  overflow='hidden' >

                </Box> */}
                <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="4px"
          borderColor="#707070"
          rounded="40px"
          shadow="sm"
          position="relative">
                      
          <Box p="6">
            
            <Stack mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>

              <Box fontSize="lg" color={useColorModeValue('gray.800', 'white')}>
                
                {data.date.toFixed(2)}
              </Box>

              <Box
                alignItems="center"
                fontSize={'1.2em'}
                >
                <chakra.a href={'#'} display={'flex'} >
                  <Icon as={FiEdit2} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Box>
            </Stack>
          </Box>
        </Box>
        
              </Flex>             
                       
            </SimpleGrid>
  
        </Stack>
  
  
  
      </Flex>
    );
  }