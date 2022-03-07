import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
  Heading,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";

export default function Component() {
  const data = [
    { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Aud73822", date: "21/09/2021", audtyp : "Compliance", audsubtyp : "ISO 9001-2005", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },


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
            <Heading  mb="120px" mt={-50} fontSize='30px'>
              NC Status
            </Heading>
          </Flex>

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
                <span>Status</span>

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

                <Flex justify={{ lg: "end" }}>
                  <ButtonGroup variant="outline" size="sm" spacing={5} >
                      {/* In Progress */}
                      <span>{audit.status}</span>
                    <IconButton colorScheme="orange" icon={<AiFillEdit />} aria-label={""}  />
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