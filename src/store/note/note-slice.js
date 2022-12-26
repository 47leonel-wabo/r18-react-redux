import { createSlice } from "@reduxjs/toolkit";

const initialState = { noteList: [] };

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setNotes: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.push({
        id: currentSlice.noteList.length,
        ...action.payload,
      });
    },
    updateNote: (currentSlice, action) => {
      const targetIndex = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[targetIndex] = action.payload;
    },
  },
});

export const notesSelector = (state) => state.NOTES.noteList;

export default noteSlice.reducer;
export const { setNotes, addNote, updateNote } = noteSlice.actions;
