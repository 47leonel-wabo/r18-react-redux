import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./note/note-slice";

const store = configureStore({
  reducer: {
    NOTES: noteSlice,
  },
});

export default store;
