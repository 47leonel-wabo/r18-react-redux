import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NoteApi from "../api/note-api";
import Header from "../components/header/Header";
import { setNotes } from "../store/note/note-slice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const getNotes = async () => {
    const notes = await NoteApi.fetchNotes();
    dispatch(setNotes(notes));
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
