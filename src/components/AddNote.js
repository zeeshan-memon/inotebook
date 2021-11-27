import React, { useContext, useState} from "react";
import noteContext from "../Context/Notes/NotesContext";
import alertContext from '../Context/alert/AlertContext';

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const showAlertContext = useContext(alertContext);
  const {showAlert} = showAlertContext;
  const [note, setNote] = useState({title:"", description:"", tag:""})
  const onChange =(e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }
  const onClickAddNote =(e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title:"", description:"", tag:""});
      showAlert('Note added Successfully', 'success');
  }
  return (
    <div className="container my-2">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="title">Ttitle</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange} value={note.title}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="description"
            placeholder="description"
            onChange={onChange} value={note.description} 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="tag">Description</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="tag"
            onChange={onChange} value={note.tag}
          />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={onClickAddNote}>
          Add Note
        </button>
      </form>
    </div>
  );
}
