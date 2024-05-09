import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `${state.cartItems[itemIndex].name} Quanity Increased Successfully`,
          {
            position: "bottom-right",
          }
        );
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
        toast.success(`${action.payload.name} Added Successfully`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.name} Removed Successfully`, {
        position: "bottom-right",
      });
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Clear Cart Successfully", {
        position: "bottom-right",
      });
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
