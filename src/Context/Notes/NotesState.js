import NotesContext from "./NotesContext";
import { useState } from "react";

const NotesState = (props)=>{
 const data = [
        {
          "_id": "619e2fb4ef2264d8e83ac493",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:32.388Z",
          "__v": 0
        },
        {
          "_id": "619e2fc1ef2264d8e83ac496",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:45.329Z",
          "__v": 0
        },
        {
          "_id": "619e2fc2ef2264d8e83ac498",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:46.332Z",
          "__v": 0
        },
        {
          "_id": "619e2fb4ef2264d8e83ac493",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:32.388Z",
          "__v": 0
        },
        {
          "_id": "619e2fc1ef2264d8e83ac496",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:45.329Z",
          "__v": 0
        },
        {
          "_id": "619e2fc2ef2264d8e83ac498",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:46.332Z",
          "__v": 0
        },
        {
          "_id": "619e2fb4ef2264d8e83ac493",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:32.388Z",
          "__v": 0
        },
        {
          "_id": "619e2fc1ef2264d8e83ac496",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:45.329Z",
          "__v": 0
        },
        {
          "_id": "619e2fc2ef2264d8e83ac498",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:46.332Z",
          "__v": 0
        },
        {
          "_id": "619e2fb4ef2264d8e83ac493",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:32.388Z",
          "__v": 0
        },
        {
          "_id": "619e2fc1ef2264d8e83ac496",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:45.329Z",
          "__v": 0
        },
        {
          "_id": "619e2fc2ef2264d8e83ac498",
          "user": "619ce0575e912fd9c5787aad",
          "title": "My first note",
          "description": "This my first note for testing",
          "tag": "testing",
          "date": "2021-11-24T12:27:46.332Z",
          "__v": 0
        },
      ]
 
 const [notes, setNotes] = useState(data);
 
    return(
    <NotesContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NotesContext.Provider>
    )
}

export default NotesState;