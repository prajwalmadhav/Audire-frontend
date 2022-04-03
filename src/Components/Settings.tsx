import {
    Flex,
    useColorModeValue,
    Stack,
    SimpleGrid,
    IconButton,
    ButtonGroup,
    Box,
    chakra,
    Heading,
  } from "@chakra-ui/react";
  import { AiFillEdit } from "react-icons/ai";
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
        <>
        
        <Heading mb={5} ml={'18%'} mt={10} fontSize='35px'>
            Settings
        </Heading>
        
        <Flex
            w="85%"
            bg="white"
            p={50}
            alignItems="center"
            justifyContent="center"
            ml={210}
        >

                <Box
                    // direction={{ base: "column" }}
                    minH={'60vh'}
                    w="full"
                    mr={5}
                    bg={{ md: bg }}
                    borderWidth='2px'
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
                        columns={{ base: 1, md: 3, lg: 4 }}
                        w="full"
                        textTransform="uppercase"
                        bg={bg2}
                        color={"gray.500"}
                        py={{ base: 1, md: 4, lg: 4 }}
                        px={{ base: 2, md: 10, lg: 15 }}
                        fontSize="md"
                        fontWeight="hairline"
                        textAlign={"center"}
                        alignItems="center"
                        justifyContent="center"
                    >

                        {/* Users  */}
                        <span>Full Name</span>
                        <span>Dept</span>
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
                                    columns={{ base: 1, md: 3, lg: 4 }}
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
                </Box>

                <Box
                    // direction={{ base: "column" }}
                    minH={'60vh'}
                    w="full"
                    mr={5}
                    bg={{ md: bg }}
                    borderWidth='2px'
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
                        columns={{ base: 1, md: 3, lg: 3 }}
                        w="full"
                        textTransform="uppercase"
                        bg={bg2}
                        color={"gray.500"}
                        py={{ base: 1, md: 4, lg: 4 }}
                        px={{ base: 2, md: 10, lg: 15 }}
                        fontSize="md"
                        fontWeight="hairline"
                        textAlign={"center"}
                        alignItems="center"
                        justifyContent="center"
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
                                    columns={{ base: 1, md: 3, lg: 3 }}
                                    w="full"
                                    py={{ base: 2, md: 4, lg: 2 }}
                                    px={{ base: 2, md: 10, lg: 15 }}
                                    fontWeight="hairline"
                                    textAlign={"center"}

                                >

                                    <span>{audit.name}</span>
                                    <span>{audit.location}</span>
                                    {/* //for overflow of objects in table header */}



                                    <Flex justify={{ lg: "flex-start" }}>
                                        <ButtonGroup size="sm" spacing={5}>



                                        </ButtonGroup>
                                    </Flex>

                                </SimpleGrid>


                            </Flex>
                        );
                    })}
                </Box>

                {/* <Box
            // direction={{ base: "column" }}
            w="full"
            bg={{ md: bg }}
            mt = {0}
            borderWidth='2px'
            minH={'50vh'}



        >
            <Flex
                direction={{ base: "row", md: "column", lg: "column" }}
            >
                
            </Flex>

            

            <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3, lg: 3 }}
                w="full"
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4, lg: 4 }}
                px={{ base: 2, md: 10, lg: 15 }}
                fontSize="md"
                fontWeight="hairline"
                textAlign={"justify"}
            >

                
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
                            columns={{ base: 1, md: 3, lg: 3 }}
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
    </Box> */}



            </Flex></>         
    );
  }