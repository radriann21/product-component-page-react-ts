import { useState } from "react"
import { Box, Float, Icon } from "@chakra-ui/react"
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverTitle, PopoverBody } from "@/components/ui/popover.tsx"
import { EmptyState } from "@/components/ui/empty-state"
import { ShoppingCart } from "lucide-react"

export const Cart = () => {

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
            1
          </Float>
          <Icon cursor='pointer'>
            <ShoppingCart />
          </Icon>
        </Box>
      </PopoverTrigger>
      <PopoverContent p="1rem" fontWeight='bold'>
        <PopoverTitle>Cart</PopoverTitle>
        <PopoverBody>
          <EmptyState
            title=""
            description="Your cart is empty."
          />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}