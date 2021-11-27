import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import alertContext from '../Context/alert/AlertContext';

export default function Login() {
    const context = useContext(alertContext);
    const {showAlert} = context;
    const [credentials, setCredentials] = useState({email:"", password:""});
    let history = useHistory();
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const submitHandler = async (e)=>{
        e.preventDefault();
            // Api Call
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
           },
        body: JSON.stringify({email:credentials.email, password:credentials.password}) // body data type must match "Content-Type" header
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        showAlert('Logged in Successfully', 'success');
            localStorage.setItem("token", json.token);
            history.push("/");
      }
      else{
        //   alert(json.message)
        showAlert(json.message, 'danger');
      }
    }
    return (
        <div className="container mt-2">
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
