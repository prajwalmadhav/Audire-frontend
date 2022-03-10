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
    chakra,
  } from "@chakra-ui/react";
  import { AiFillEdit } from "react-icons/ai";
  import { Search2Icon } from "@chakra-ui/icons";
import { FaRegTimesCircle } from "react-icons/fa";
  
  export default function Component() {
    const data = [
      { fullname: "Anderson Jeffe", dept: "Engineering", emailid : "anderson.jeffe@gmail.com", name: "Engineering", location: "Bengaluru"},
      { fullname: "Anderson Jeffe", dept: "Engineering", emailid : "anderson.jeffe@gmail.com", name: "Engineering", location: "Bengaluru"},
      
      
        
  
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
            ml={210}
        >


            <Stack
                direction={{ base: "column" }}
                w="full"
                bg={{ md: bg }}


            >
                <Flex
                    direction={{ base: "row", md: "column", lg: "column" }}
                >
                    <Heading mb={"4rem"} mt={-30} fontSize='30px'>
                        Settings
                    </Heading>
                </Flex>

                <Stack>
                    {/* // adding buttons and heading */}
                </Stack>

                <SimpleGrid
                    spacingY={3}
                    columns={{ base: 1, md: 3, lg: 7 }}
                    w="full"
                    textTransform="uppercase"
                    bg={bg2}
                    color={"gray.500"}
                    py={{ base: 1, md: 4, lg: 4 }}
                    px={{ base: 2, md: 10, lg: 15 }}
                    fontSize="md"
                    fontWeight="hairline"
                    textAlign={"center"}
                >

                    {/* Users  */}
                    <span>Full Name</span>
                    <span>Department</span>
                    <span>Email ID</span>



                </SimpleGrid>

                    {data.map((audit, pid) => {
                    return (
                        <Flex
                            direction={{ base: "row", md: "column", lg: "column" }}
                            bg={dataColor}
                            key={pid}
                        >

                            <SimpleGrid
                                spacingY={3}
                                columns={{ base: 1, md: 3, lg: 7 }}
                                w="full"
                                py={{ base: 2, md: 4, lg: 2 }}
                                px={{ base: 2, md: 10, lg: 15 }}
                                fontWeight="hairline"
                                textAlign={"center"}

                            >
                                
                                <span>{audit.fullname}</span>
                                <span>{audit.dept}</span>
                                 {/* //for overflow of objects in table header */}
                                    <chakra.span
                                    textOverflow="ellipsis"
                                    overflow="hidden"
                                    whiteSpace="nowrap"
                                    >
                                    {audit.emailid}
                                    </chakra.span>


                                <Flex justify={{ lg: "flex-start" }}>
                                    <ButtonGroup size="sm" spacing={5}>
                                       
                                        {/* <span>{audit.status}</span> */}
                                        <IconButton colorScheme="orange" variant="outline" icon={<AiFillEdit />} aria-label={" "} />
                                        <IconButton colorScheme="orange" variant="ghost" icon={<FaRegTimesCircle />} aria-label={" "} />

                                    </ButtonGroup>
                                </Flex>

                            </SimpleGrid>


                        </Flex>
                    );
                })}
            </Stack>

            <Stack
                    direction={{ base: "column" }}
                    w="full"
                    bg={{ md: bg }}
                    mt = {"70px"}


                >
                    <Flex
                        direction={{ base: "row", md: "column", lg: "column" }}
                    >
                        
                    </Flex>

                    <Stack>
                        {/* // adding buttons and heading */}
                    </Stack>

                    <SimpleGrid
                        spacingY={3}
                        columns={{ base: 1, md: 3, lg: 7 }}
                        w="full"
                        textTransform="uppercase"
                        bg={bg2}
                        color={"gray.500"}
                        py={{ base: 1, md: 4, lg: 4 }}
                        px={{ base: 2, md: 10, lg: 15 }}
                        fontSize="md"
                        fontWeight="hairline"
                        textAlign={"center"}
                    >

                        {/* Users  */}
                        <span>Name</span>
                        <span>Location</span>



                    </SimpleGrid>

                    {data.map((audit, pid) => {
                        return (
                            <Flex
                                direction={{ base: "row", md: "column", lg: "column" }}
                                bg={dataColor}
                                key={pid}
                            >

                                <SimpleGrid
                                    spacingY={3}
                                    columns={{ base: 1, md: 3, lg: 7 }}
                                    w="full"
                                    py={{ base: 2, md: 4, lg: 2 }}
                                    px={{ base: 2, md: 10, lg: 15 }}
                                    fontWeight="hairline"
                                    textAlign={"center"}

                                >
                                   
                                    <span>{audit.name}</span>
                                    <span>{audit.location}</span>


                                    

                                </SimpleGrid>


                            </Flex>
                        );
                    })}
            </Stack>

        </Flex>         
    );
  }