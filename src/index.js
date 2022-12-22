import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/App";
import "./index.css";
import CreateNote from "./pages/create-note/CreateNote";
import NotFound from "./pages/not-found/NotFound";
import NoteDetails from "./pages/note-details/NoteDetails";
import Notes from "./pages/overview/Notes";
import reportWebVitals from "./reportWebVitals";
import store from "./store/AppStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Notes />} />
            <Route path="/note/:id" element={<NoteDetails />} />
            <Route path="/note/new" element={<CreateNote />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
