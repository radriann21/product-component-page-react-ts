import { useState } from "react"
import { Box, Float, Icon } from "@chakra-ui/react"
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverTitle, PopoverBody } from "@/components/ui/popover.tsx"
import { EmptyState } from "@/components/ui/empty-state"
import { ShoppingCart } from "lucide-react"
import { CartStore } from "@/store/CartStore"

export const Cart = () => {

  const cart = CartStore((state) => state.cart)
  const totalElements = cart.reduce((acc, el) => acc + (el.quantity ?? 0), 0)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <PopoverTrigger asChild>
        <Box position='relative'>
          <Float
            placement="top-end"
            width="20px"
            height="10px"
            p='8px'
            fontSize="12px"
            bgColor="customOrange"
            color="white"
            rounded="full"
          >
            {totalElements}
          </Float>
          <Icon cursor='pointer'>
            <ShoppingCart />
          </Icon>
        </Box>
      </PopoverTrigger>
      <PopoverContent fontWeight='bold'>
        <PopoverTitle borderBottom='1px solid' borderBottomColor='grayishBlue' p='.8rem'>Cart</PopoverTitle>
        <PopoverBody>
          <EmptyState
            title=""
            description={totalElements > 0 ? 'si hay algo' : 'Your cart is empty.'}
          />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}