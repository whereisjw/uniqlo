import { configureStore, createSlice } from "@reduxjs/toolkit";

let bucket = createSlice({
  name: "bucket",
  initialState: [
    { id: 990, name: "트렌치코트", count: 2 },
    { id: 992, name: "가을 후리스", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let idx = state.findIndex((v) => {
        return v.id == action.payload;
      });
      state[idx].count++;
    },
  },
});

export let { addCount } = bucket.actions;

export default configureStore({
  reducer: {
    bucket: bucket.reducer,
  },
});
