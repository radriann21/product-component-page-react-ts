import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        customOrange: { value: 'hsl(26, 100%, 55%)' },
        customOrangeHover: { value: 'hsla(26, 100.00%, 55.10%, 0.71)' },
        paleOrange: { value: 'hsl(25, 100%, 94%)' },
        veryDarkBlue: { value: 'hsl(220, 13%, 13%)' },
        darkGrayishBlue: { value: 'hsl(219, 9%, 45%)' },
        grayishBlue: { value: 'hsl(220, 14%, 75%)' },
        lightGrayishBlue: { value: 'hsl(223, 64%, 98%)' },
      },
      fonts: {
        headings: { value: 'Kumbh Sans Variable' },
        body: { value: 'Kumbh Sans Variable' }
      }
    }
  }
})

export const system = createSystem(defaultConfig, config)