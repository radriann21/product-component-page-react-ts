import { Flex, Card, Image, Box, Text, Button, Icon } from "@chakra-ui/react"
import { Trash2 } from "lucide-react"
import { CartStore } from "@/store/CartStore"

export const ListOfProducts = () => {

  const cart = CartStore((state) => state.cart)
  const removeElementFromCart = CartStore((state) => state.removeElementFromCart)

  if (cart.length === 0) return null

  return (
    <Flex flexDir="column" w="full">
      {
        cart.map((product) => {
          const discountedPrice = product.price * (product.discount / 100)
          const total = discountedPrice * (product.quantity || 1)
          return (
            <Card.Root key={product.id} flexDirection="row" overflow='hidden' w="full" border="none">
              <Image
                src={product.image.thumbnail}
                objectFit='contain'
                borderRadius='20px'
                alt="sneakers thumbnail"
                maxW="50px"
              />
              <Box display="flex" alignItems="center" >
                <Card.Body p=".8rem">
                  <Card.Title fontSize="12px">{product.name}</Card.Title>
                  <Card.Description>
                    <Text display='inline' color="darkGrayishBlue" fontWeight="normal">
                      ${discountedPrice.toFixed(2)} x {product.quantity}
                    </Text>
                    <Text display='inline'>
                      {' '}
                      ${total.toFixed(2)}
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Button onClick={() => removeElementFromCart(product.id)} size="xs" bgColor="transparent">
                  <Icon w="20px" color="veryDarkBlue">
                    <Trash2 />
                  </Icon>
                </Button>
              </Box>
            </Card.Root>
          )
        })
      }
      <Button fontWeight="bold" rounded="lg" bgColor="customOrange" w="full" color="veryDarkBlue" transition=".3s ease-in background" _hover={{ bgColor: 'customOrangeHover' }}>
        Checkout
      </Button>
    </Flex>
  )

}