import { useState } from "react"
import { Flex, Button, Icon, Image, HStack, Text, DrawerHeader } from "@chakra-ui/react"
import { Menu } from "lucide-react"
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer"
import sneakersLogo from "@/assets/logo.svg"

export const MenuNavbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const options = ['Collections', 'Men', 'Women', 'About', 'Contact']

  return (
    <Flex
      as="section"
      alignItems="center"
    >
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement='start'>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="plain" display={{ base: 'block', lg: 'none' }}>
            <Icon color="gray">
              <Menu />
            </Icon>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader mb="1rem">
            <DrawerCloseTrigger />
          </DrawerHeader>
          <DrawerBody>
            <Flex spaceY="1.5rem" flexDir='column' color="veryDarkBlue" fontWeight="bold" fontSize='16px'>
              {options.map((option, index) => (
                <Text key={index} cursor='pointer' _hover={{ color: 'veryDarkBlue' }}>{option}</Text>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
      <Image src={sneakersLogo} marginRight={{ base: '.5rem', lg: '4rem' }} alt="the sneakers logo" />
      <HStack spaceX='12px' color='grayishBlue' display={{ base: 'none', lg: 'flex' }}>
        {options.map((option, index) => (
          <Text key={index} cursor='pointer' _hover={{ color: 'veryDarkBlue' }}>{option}</Text>
        ))}
      </HStack>
    </Flex>
  )
}