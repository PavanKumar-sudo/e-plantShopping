import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new plant item to the cart or updates quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Removes an item from the cart based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Updates the quantity of a specific item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update item quantity
      }
    },
  },
});

// Export actions to be used in other components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in store.js
export default CartSlice.reducer;
