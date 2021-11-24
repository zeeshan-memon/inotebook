import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/NotesContext'
export default function About() {

const a = useContext(noteContext)
 useEffect(() => {
   a.update()
 }, [])

    return (
        <div>
            This is About {a.state.name}
        </div>
    )
}
