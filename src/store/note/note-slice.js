import { createSlice } from "@reduxjs/toolkit";

const initialState = { noteList: [] };

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setNotes: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
  },
});

export const notesSelector = (state) => state.NOTES.noteList;

export default noteSlice.reducer;
export const { setNotes } = noteSlice.actions;
