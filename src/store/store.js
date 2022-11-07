import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./userSlice";

let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      let index = state.findIndex((a) => a.id === action.payload);
      state[index].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

let count = createSlice({
  name: "count",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    count: count.reducer,
    product: product.reducer,
  },
});

export let { changeCount, addItem } = product.actions;
