import React, { useContext } from "react";
import noteContext from "../Context/Notes/NotesContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note, index) => {
        return <NoteItem key = {index} note={note} />
      })}
    </div>
  );
}
