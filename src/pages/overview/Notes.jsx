import React from "react";
import NoteCard from "../../components/card/NoteCard";
import style from "./notes.module.css";

const Notes = () => {
  return (
    <div className={style.container}>
      <NoteCard
        title={`Not title`}
        subTitle={`23/12/2022`}
        content={`The content should be displayed here presenting what the note be displayed here presenting what the note be displayed here presenting what the note be displayed here presenting what the note is all about and how it should be red or precess in order to accomplish this task, i know this is lot of talk (it's made on purpose) stop!`}
        clickActionHandler={() => alert("Navigate to note details")}
        deleteActionHandler={() => alert("Delete note")}
      />
    </div>
  );
};

export default Notes;
