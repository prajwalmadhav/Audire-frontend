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
} from "@chakra-ui/react";

export default function Component() {
  const data = [
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" },
    { id: "Segun Adebayo", date: "sage@chakra.com", audtyp : "Compliance", audsubtyp : "ISO", audname : "John Doe", dept : "Manufacturing" , status : "In progress" }

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
            <Heading  mb="50px"  fontSize='25px'>
              NC Status
            </Heading>
          </Flex>
          

          <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3, lg: 7 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
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
                py={2}
                px={10}
                fontWeight="hairline"
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
                <span>{audit.id}</span>
                
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}