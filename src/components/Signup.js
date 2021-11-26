import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


export default function Signup() {
    let history = useHistory();
    const [credentials, setcCedentials] = useState({name:"", email:"", password:"", cpassword:""})
    const onChange = (e)=>{
        setcCedentials({...credentials, [e.target.name]:e.target.value})
    }
    const submitHandler = async (e)=>{
        e.preventDefault();
            // Api Call
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
           },
        body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password}) // body data type must match "Content-Type" header
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
            localStorage.setItem("token", json.token);
            history.push("/");
      }
      else{
          alert(json.message)
      }
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" minLength={5} required onChange={onChange} value={credentials.name} className="form-control" name="name" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" minLength={5} required onChange={onChange} value={credentials.email} className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" minLength={5} required onChange={onChange} value={credentials.password} className="form-control" name="password" id="password"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" minLength={5} required onChange={onChange}  value={credentials.cpassword} className="form-control" name="cpassword" id="cpassword"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
