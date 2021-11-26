import AlertsContext from './AlertsContext';
import React, {useState} from 'react'

function AlerstState(props) {
    const [alert, setAlert] = useState({message:"", type:""});
    const showAlert = (message, type) =>{
        setAlert({message: message, type: type})
     }
    return (
       <AlertsContext.Provider value={{alert, showAlert}}>
           {props.childern}
       </AlertsContext.Provider>
    )
}

export default AlerstState
