import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    setBooks(state, action) {
      return action.payload;
    },
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { setBooks, addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
