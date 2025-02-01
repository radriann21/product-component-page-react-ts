import { Flex, Box, Image } from "@chakra-ui/react"
import { ProductInfo } from "./ProductInfo"
import { CartStore } from "@/store/CartStore"

export const ProductContainer = () => {

  const product = CartStore((state) => state.product)

  return (
    <Flex
      as="section"
      maxW="full"
      h="100%"
      alignItems="center"
      justifyContent="center"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Box as="section" w="50%">
        <Image mx="auto" height="450px" rounded="lg" src={product.image.desktop} alt="the main sneaker" />
      </Box>
      <ProductInfo />
    </Flex>
  )
}