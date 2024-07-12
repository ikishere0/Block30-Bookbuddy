import { combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import userReducer from "./userSlice";
import accountReducer from "./accountSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  user: userReducer,
  account: accountReducer,
});

export default rootReducer;
