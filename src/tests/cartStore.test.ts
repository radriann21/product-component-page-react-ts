import { expect, test } from "vitest"
import { CartStore } from "@/store/CartStore"

test('add a new element to cart', () => {
  const product: Product = {
    id: '1',
    image: {
      desktop: 'path/to/desktop/image.jpg',
      thumbnail: 'path/to/thumbnail/image.jpg'
    },
    name: 'Test Product',
    description: 'This is a test product',
    company: 'Test Company',
    price: 100,
    discount: 10,
    quantity: 1
  }

  CartStore.getState().addElementToCart(product)
  const cart = CartStore.getState().cart

  expect(cart).toHaveLength(1)
  expect(cart[0]).toEqual({ ...product, quantity: 1 })
})

test('should increment the quantity of an element in the cart', () => {
  const product: Product = {
    id: '1',
    image: {
      desktop: 'path/to/desktop/image.jpg',
      thumbnail: 'path/to/thumbnail/image.jpg'
    },
    name: 'Test Product',
    description: 'This is a test product',
    company: 'Test Company',
    price: 100,
    discount: 10,
    quantity: 1
  }

  CartStore.getState().addElementToCart(product)
  CartStore.getState().addElementToCart(product)

  const cart = CartStore.getState().cart
  expect(cart).toHaveLength(1)
  expect(cart[0]).toEqual({ ...product, quantity: 2 })
})

test('should remove one quantity of the specified item', () => {
  const product: Product = {
    id: '1',
    image: {
      desktop: 'path/to/desktop/image.jpg',
      thumbnail: 'path/to/thumbnail/image.jpg'
    },
    name: 'Test Product',
    description: 'This is a test product',
    company: 'Test Company',
    price: 100,
    discount: 10,
    quantity: 1
  }

  CartStore.getState().addElementToCart(product)
  CartStore.getState().addElementToCart(product)
  CartStore.getState().substractElementFromCart(product.id)

  const cart = CartStore.getState().cart
  expect(cart).toHaveLength(1)
  expect(cart[0]).toEqual({ ...product, quantity: 1 })

})