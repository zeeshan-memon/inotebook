import React, {useContext} from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/Notes/NotesContext";
export default function NoteItem(props) {
  const context = useContext(noteContext)
  const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fas fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
            <Link to={`/notesdetails/${note._id}`}>
          <p className="card-text">{note.description}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
