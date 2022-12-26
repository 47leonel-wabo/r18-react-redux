import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NoteApi from "../api/note-api";
import Header from "../components/header/Header";
import { setNotes } from "../store/note/note-slice";
import "./App.css";

function App({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotes = async () => {
      const notes = await NoteApi.fetchNotes();
      dispatch(setNotes(notes));
    };
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
