import { Flex } from "@chakra-ui/react"
import { MenuNavbar } from "./MenuNavbar"
import { MenuCart } from "../cart/MenuCart"

export const Navbar = () => {
  return (
    <Flex
      as="header"
      w="full"
      py={{ base: "2rem", md: "4rem", }}
      px={{ base: ".2rem", md: "2rem", xl: "4rem" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <MenuNavbar />
      <MenuCart />
    </Flex>
  )
}