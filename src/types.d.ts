type Product = {
  id: string,
  image: {
    desktop: string,
    thumbnail: string
  },
  name: string,
  description: string,
  company: string,
  price: number,
  discount: number,
  quantity?: number
}

