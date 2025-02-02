import { beforeEach, describe, expect, test } from "vitest"
import { CartStore } from "@/store/CartStore"

describe('Cart Store behaviour', () => {
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

  const product2: Product = {
    id: '2',
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

  beforeEach(() => {
    CartStore.setState({ cart: [] })
  })

  test('add a new element to cart', () => {
    CartStore.getState().addElementToCart(product)
    const cart = CartStore.getState().cart

    expect(cart).toHaveLength(1)
    expect(cart[0]).toEqual({ ...product, quantity: 1 })
  })

  test('should increment the quantity of an element in the cart', () => {
    CartStore.getState().addElementToCart(product)
    CartStore.getState().addElementToCart(product)

    const cart = CartStore.getState().cart
    expect(cart).toHaveLength(1)
    expect(cart[0]).toEqual({ ...product, quantity: 2 })
  })

  test('should remove one quantity of the specified item', () => {
    CartStore.getState().addElementToCart(product)
    CartStore.getState().addElementToCart(product)
    CartStore.getState().substractElementFromCart(product.id)

    const cart = CartStore.getState().cart
    expect(cart).toHaveLength(1)
    expect(cart[0]).toEqual({ ...product, quantity: 1 })

  })

  test('should have two elements', () => {
    CartStore.getState().addElementToCart(product)
    CartStore.getState().addElementToCart(product2)
    const cart = CartStore.getState().cart

    expect(cart).toHaveLength(2)
  })

  test('should remove one element of the cart', () => {
    CartStore.getState().addElementToCart(product)
    CartStore.getState().addElementToCart(product2)
    CartStore.getState().removeElementFromCart(product2.id)
    const cart = CartStore.getState().cart
    expect(cart).toHaveLength(1)
  })

  test('it should handle an empty cart', () => {
    CartStore.getState().addElementToCart(product)
    CartStore.getState().removeElementFromCart(product.id)
    const cart = CartStore.getState().cart
    expect(cart).toHaveLength(0)
  })
})

