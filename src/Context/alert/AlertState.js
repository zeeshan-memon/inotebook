import {useState} from 'react';
import AlertContext from './AlertContext';

function AlertState(props) {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) =>{
        setAlert({message: message, type: type});
        setTimeout(() => {
            setAlert(null)
          }, 1500);
     }
    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
