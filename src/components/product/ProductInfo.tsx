import {
  Box,
  Text,
  Heading,
  HStack,
  Stat,
  Flex,
  Button,
  Icon,
  FormatNumber,
  Badge
} from "@chakra-ui/react"
import { ShoppingCart } from "lucide-react"
import { CartStore } from "@/store/CartStore"

export const ProductInfo = () => {

  const product = CartStore((state) => state.product)
  const cart = CartStore((state) => state.cart);
  const addElementToCart = CartStore((state) => state.addElementToCart)
  const substractElementFromCart = CartStore((state) => state.substractElementFromCart)

  const productInCart = cart.find((item) => item.id === product.id);
  const quantityInCart = productInCart ? productInCart.quantity : 0;
  const discountedPrice = product.price * (product.discount / 100)

  const handleAddToCart = () => {
    addElementToCart(product)
  }

  return (
    <Box as="section" w={{ base: "100%", lg: "50%" }} p={{ base: '1rem', md: "2rem", lg: '0' }}>
      <Box w={{ base: "100%", xl: "60%" }} pt={{ base: '1rem', sm: '0' }}>
        <Text color="darkGrayishBlue" fontWeight="bold" textTransform="uppercase" letterSpacing="2px" mb=".5rem">
          {product.company}
        </Text>
        <Heading color="veryDarkBlue" fontWeight="bold" fontSize="40px" lineHeight="3rem" mb="1.5rem">
          {product.name}
        </Heading>
        <Text color="darkGrayishBlue" fontSize="14px">
          {product.description}
        </Text>
      </Box>
      <Box w="60%" mt="2rem">
        <Stat.Root>
          <HStack>
            <Text fontWeight="bold" fontSize="24px">
              <FormatNumber value={discountedPrice} style="currency" currency="USD" />
            </Text>
            <Badge bgColor="veryDarkBlue" color="white" fontWeight="semibold" size="sm">{product.discount}%</Badge>
          </HStack>
          <Stat.HelpText fontWeight="bold" textDecor="line-through" fontSize="12px">
            ${product.price.toFixed(2)}
          </Stat.HelpText>
        </Stat.Root>
      </Box>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        w={{ base: "100%", lg: "60%" }}
        spaceX={{ base: "0", lg: "1rem" }}
        spaceY={{ base: '.5rem', lg: '0' }}
        mt="2rem"
        align="center"
      >
        <Flex w={{ base: "100%", lg: "40%" }} align="center" rounded="md" bgColor="lightGrayishBlue" justify="space-between">
          <Button onClick={() => substractElementFromCart(product.id)} bgColor="transparent" color="customOrange" fontWeight="bold" fontSize="18px" transition=".2s ease-in opacity" _hover={{ opacity: '.75' }}>
            -
          </Button>
          <Text fontWeight="semibold">{quantityInCart}</Text>
          <Button onClick={handleAddToCart} bgColor="transparent" color="customOrange" fontWeight="bold" fontSize="18px" transition=".2s ease-in opacity" _hover={{ opacity: '.75' }}>
            +
          </Button>
        </Flex>
        <Button onClick={handleAddToCart} w={{ base: "100%", lg: "60%" }} bgColor="customOrange" color="veryDarkBlue" fontWeight="bold" transition=".2s ease-in all" _hover={{ bgColor: 'customOrangeHover' }}>
          <Icon>
            <ShoppingCart />
          </Icon>
          Add to Cart
        </Button>
      </Flex>
    </Box>
  )
}