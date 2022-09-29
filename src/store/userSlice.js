import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      return (state.name = "park");
    },
  },
});

export let { changeName } = user.actions;
export default user;
