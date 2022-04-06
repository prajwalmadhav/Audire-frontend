import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Stack,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiEdit2 } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
  interface RatingProps {
    rating: number;
    numReviews: number;
  }
  

  function ProductAddToCart() {
    return (
      <Flex p={50} w="full" alignItems="center"  justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="40px"
          shadow="lg"
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
                
                {data.price.toFixed(2)}
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
    );
  }
  
  export default ProductAddToCart;