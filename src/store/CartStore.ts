import { create } from "zustand"
import data from "../data.json"

type State = {
  product: Product,
  cart: Product[]
}

type Actions = {
  addElementToCart: (product: Product) => void
  substractElementFromCart: (id: string) => void
}

export const CartStore = create<State & Actions>((set) => ({
  product: data,
  cart: [],
  addElementToCart: (product) =>
    set((state) => {
      const findElement = state.cart.find((el) => el.id === product.id);
      if (findElement) {
        return {
          cart: state.cart.map((el) =>
            el.id === product.id ? { ...el, quantity: (el.quantity || 1) + 1 } : el
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  substractElementFromCart: (id) =>
    set((state) => {
      const cart = state.cart.map((item) => {
        return item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      })
      return { cart }
    })
}));