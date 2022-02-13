import React from 'react'
import { useParams } from 'react-router'

function NotesDetials() {
    const {id} =  useParams();
    return (
        <div>
            Notes NotesDetials {id}
        </div>
    )
}

export default NotesDetials
