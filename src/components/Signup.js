import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate=useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const { name, email, password, cpassword } = credentials
        if (password !== cpassword) {
            props.showAlert("Passwords don't match", "danger")
            return;
        }
        const response = await fetch("http://localhost:5000/api/auth",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password}),

          });
          const json =await response.json()
          console.log(json)
          if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/login");
            props.showAlert("Account Created Successfully","success")
            
          }
          else{
           props.showAlert("Invalid Credentials","danger")
          }
          //setCredentials({ name: "", email: "", password: "", cpassword: "" })
    }

    const onChange =(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div className='container mt-3'>
        <h2>Create an Account to open iNotebook</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Enter your full name</label>
    <input type="text" className="form-control" id="name"  name="name" onChange={onChange} aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" onChange={onChange} minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="cpassword" id="cpassword" onChange={onChange} minLength={5} required/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
