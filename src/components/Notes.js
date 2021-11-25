import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../Context/Notes/NotesContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote} = context;

  const [note, setNote] = useState({id:"", etitle:"", edescription:"", etag:""})
  useEffect(() => {
   getNotes()
   // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (note)=>{
    ref.current.click();
    setNote({id:note._id, etitle: note.title, edescription: note.description, etag: note.tag})
  }

  const onChange =(e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
const onClickAddNote =(e)=>{
  editNote(note.id, note.etitle, note.edescription,)
  refClose.current.click();
}
  return (
    <>
      <AddNote />
  
        <button type="button"  ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form>
        <div className="form-group mb-3">
          <label htmlFor="etitle">Ttitle</label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange} value={note.etitle}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="edescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="edescription"
            placeholder="edescription"
            onChange={onChange} value={note.edescription}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="etag">Description</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="etag"
            placeholder="etag"
            onChange={onChange} value={note.etag}
          />
        </div>
      </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary"  onClick={onClickAddNote}>Update Note</button>
              </div>
            </div>
          </div>
        </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container">
         {notes.length === 0 && 'No notes to display'}
         </div>
        {notes.map((note, index) => {
          return <NoteItem key={index} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}
