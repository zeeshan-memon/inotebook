import NotesContext from "./NotesContext";
import { useState } from "react";

const NotesState = (props)=>{
 const data = {
     "name":"Zeeshan Ahmed Memon"
 }
 const [state, setstate] = useState(data);
 const update = ()=>{
    setTimeout(() => {
        setstate({name:"Kashan Ahmed"})
    }, 2000);
 }
    return(
    <NotesContext.Provider value={{state, update}}>
        {props.children}
    </NotesContext.Provider>
    )
}

export default NotesState;