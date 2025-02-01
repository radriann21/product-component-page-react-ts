import { Container } from "@chakra-ui/react"
import { Navbar } from "@/components/navbar/Navbar"
import { ProductContainer } from "./components/product/ProductContainer"

function App() {
  return (
    <Container
      as="main"
      minH="100dvh"
      fontFamily='headings'
    >
      <Navbar />
      <ProductContainer />
    </Container>
  )
}

export default App
