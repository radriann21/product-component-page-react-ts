import { Box } from "@chakra-ui/react"
import { Navbar } from "@/components/navbar/Navbar"
import { ProductContainer } from "./components/product/ProductContainer"

function App() {
  return (
    <Box
      as="main"
      minH="100dvh"
      fontFamily='headings'
      px={{ lg: "1rem" }}
    >
      <Navbar />
      <ProductContainer />
    </Box>
  )
}

export default App
