import NotesContext from "./NotesContext";
import { useState } from "react";

const NotesState = (props) => {
  const host = "http://localhost:5000"
  
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {

    // Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json);
    setNotes(json.notes);
  };
  const addNote = async (title, description, tag) => {

    // Api Call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    
    setNotes(notes.concat(json.notes));
  };

  const editNote = async(id, title, description, tag) => {

      // Api Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')

        },
        body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
      });
       const json = await response.json();
       const newNotes = JSON.parse(JSON.stringify(notes))
       console.log(json);
          for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id.toString() === id) {
              newNotes[index].title = title
              newNotes[index].description = description
              newNotes[index].tag = tag
              break;
            }
          }
          setNotes(newNotes)
  };  

  const deleteNote = async (id) => {

    // Api Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json);
    const newNotes = notes.filter(note=>{return note._id !==id});
    setNotes(newNotes)
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
