import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [contact,setContact]=useState("")
  const [address,setAddress]=useState("")
  const nav=useNavigate()
  const cross=()=>{
      nav("/")
  }
  const signup=(e)=>{
    e.preventDefault()
    let data={
      name:name,
      email:email,
      password:password,
      contact:contact,
      address:address
    }
    axios.post("http://localhost:5000/customer/register",data)
    .then((res)=>{
      console.log(res);
      if(res.data.success)toast.success(res.data.message)
        else toast.error(res.data.message)
    })
    .catch((err)=>{

    })
    // reset all fields
    setName("")
    setEmail("")
    setPassword("")
    setContact("")
    setAddress("")
  }
    return(
        <>
<ToastContainer/>

         <div className="container" id="register_section">
               <div className="container mt-5 p-4" id="form_div" style={{borderRadius:"20px",width:"500px"}}>
               <div className="d-flex justify-content-end">
              <img  src="https://img.icons8.com/ios-filled/20/FFFFFF/x.png" onClick={cross} alt="x"/>
              </div>
            <h3 className="text-center text-white">Sign-Up</h3>
        <form onSubmit={signup}>
        <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
       Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
  </div>
        <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
       Email
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputPassword1"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
       Contact
    </label>
    <input
      type="tel"
      className="form-control"
      id="exampleInputPassword1"
      value={contact}
      onChange={(e)=>setContact(e.target.value)}
    />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
       Address
    </label>
    <textarea
    col="35"
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
    />
  </div>

 
  <button type="submit" className="btn btn-warning text-white mb-3">
   Sign Up
  </button>
</form>
<div className="container d-flex justify-content-start">
    <p className="me-2">Already Have an Account?</p><Link to="/login">Login</Link>
</div>

        </div>
 </div>
        </>
    )
}