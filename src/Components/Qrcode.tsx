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

export default function Component() {
  const data = [
    
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
              Qr Code
            </Heading>
          </Flex>

          {/* searching fields */}
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

      </Stack>



    </Flex>
  );
}