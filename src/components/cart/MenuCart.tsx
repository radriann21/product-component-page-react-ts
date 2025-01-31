import { Flex } from "@chakra-ui/react"
import { Avatar } from "../ui/avatar.tsx"
import { Cart } from "./Cart.tsx"
import imageAvatar from "@/assets/image-avatar.png"

export const MenuCart = () => {
  return (
    <Flex
      as="section"
      alignItems='center'
      spaceX='2rem'
    >
      <Cart />
      <Avatar
        cursor='pointer'
        size={{ base: "md", md: 'lg' }} src={imageAvatar}
        transition="all .2s ease-in"
        outlineWidth='2px'
        outlineColor='transparent'
        outlineStyle='solid'
        _hover={{ outlineColor: 'customOrange' }}
      />
    </Flex>
  )
} 