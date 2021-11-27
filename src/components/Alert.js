import  {useContext} from 'react'
import alertContext from '../Context/alert/AlertContext';
export default function Alert() {
    const context = useContext(alertContext);
    const {alert} = context; 
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:"50px"}}>
          {alert && <div>
                        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{alert.type==="danger"? "Error":capitalize(alert.type)}</strong> : {alert.message}
                         </div>
                        </div>
          }
        </div>
    )
}
