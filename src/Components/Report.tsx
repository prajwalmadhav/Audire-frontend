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
  } from "@chakra-ui/react";
  import { AiFillEdit } from "react-icons/ai";
  import { Search2Icon } from "@chakra-ui/icons";
  import { FaCloudDownloadAlt, FaDownload } from "react-icons/fa";
  
  export default function Component() {
    const data = [
      { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : " " },
      { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : " " },
      { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : " " },
       
  
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
                Reports
              </Heading>
            </Flex>
  
            <Stack  >
              <HStack spacing={10} mb={8} >
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
                  spacingY={3}
                  columns={{ base: 1, md: 3, lg: 7 }}
                  w="full"
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{ base: 1, md: 4, lg: 4 }}
                  px={{ base: 2, md: 10 , lg: 15}}
                  fontSize="md"
                  fontWeight="hairline"
                  textAlign={"center"}
                >
                  <span>Identifier</span>
                  <span>Date</span>
                  <span>Audit Type</span>
                  <span>Audit Sub-Type</span>
                  <span>Auditor Name</span>
                  <span>Department</span>
                  <span>Download</span>
  
            </SimpleGrid>
  
          {data.map((audit, pid) => {
            return (
              <Flex
                direction={{ base: "row", md: "column" , lg: "column" }}
                bg={dataColor}
                key={pid}
              >
                
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 3, lg: 7 }}
                  w="full"
                  py={{base: 2, md: 4, lg: 2}}
                  px={{base: 2, md: 10 , lg: 15}}
                  fontWeight="hairline"
                  textAlign={"center"}
  
                >
                  {/*  //for overflow of objects in table header
                   <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {audit.email}
                  </chakra.span> */}
                  <span>{audit.id}</span>
                  <span>{audit.date}</span>
                  <span>{audit.audtyp}</span>
                  <span>{audit.audsubtyp}</span>
                  <span>{audit.audname}</span>
                  <span>{audit.dept}</span>
  
                  <Flex justify={{ lg: "center" }}>
                    <ButtonGroup variant="outline" size="sm" spacing={5} >
                        {/* In Progress */}
                        <span>{audit.status}</span>
                      <IconButton colorScheme="orange" icon={<FaDownload />} aria-label={""}  />
                    </ButtonGroup>
                  </Flex>
  
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
        
  
  
      </Flex>
    );
  }