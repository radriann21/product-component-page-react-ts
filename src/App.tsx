import { Container } from "@chakra-ui/react"
import { Navbar } from "@/components/navbar/Navbar"

function App() {
  return (
    <Container
      as="main"
      minH="100dvh"
      fontFamily='headings'
    >
      <Navbar />
    </Container>
  )
}

export default App
