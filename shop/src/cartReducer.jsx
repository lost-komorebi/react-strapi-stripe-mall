import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalNum: 0, // 这里的数量是指有多少种sku，而不是具体的商品数量
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // 判断该物品是否已经在购物车内
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // 重新计算总价格和数量
      state.totalPrice += action.payload.quantity * action.payload.price;
      state.totalNum += 1;
    },
    removeItem: (state, action) => {
      // 找到要移除的商品
      const item = state.products.find((item) => item.id === action.payload);
      // 重新计算总价格和数量
      state.totalPrice -= item.quantity * item.price;
      state.totalNum -= 1;
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
      state.totalNum = 0;
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
