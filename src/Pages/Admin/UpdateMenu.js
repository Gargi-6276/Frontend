import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

export default function UpdateMenu(){
  const nav=useNavigate()
  const[name,setName]=useState("")
  const [image,setImage]=useState("")
  const[price,setPrice]=useState("")

  //useParams Hook
  const params=useParams()
  const id=params.id

useEffect(()=>{
 axios.post("http://localhost:5000/admin/menu/single",{_id:id},{headers:{Authorization:sessionStorage.getItem("token")}})
 .then((res)=>{
  // if(res.data.success)toast.success(res.data.message)
  //   else toast.error(res.data.message) 
  setName(res.data.data.name)
  setImage(res.data.data.image)
  setPrice(res.data.data.price)
  
 
 })
 .catch((err)=>{
toast.error(err.message)
 })
},[])
const handleSubmit=(e)=>{
  e.preventDefault()
  let data=new FormData()
  data.append("name",name)
  data.append("_id",id)
  data.append("image",image)
  data.append("price",price)
  axios.post("http://localhost:5000/admin/category/update",data,{headers:{Authorization:sessionStorage.getItem("token")}})
  .then((res)=>{
    if(res.data.success)toast.success(res.data.message)
      else toast.error(res.data.message) 
   setTimeout(() => {
    nav("/admin/managemenu")
   }, 1000);
   })
   .catch((err)=>{
  toast.error(err.message)
   })
   setName("")
   setPrice("")
}
  return(
      <>
<ToastContainer/>
<div className="container-xxl py-5 bg-dark hero-header mb-5">
<div className="container text-center my-5 pt-5 pb-4">
  <h1 className="display-3 text-white mb-3 animated slideInDown">
  Update-Menu
  </h1>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb justify-content-center text-uppercase">
      <li className="breadcrumb-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Update-Menu</a>
      </li>
    
    </ol>
  </nav>
</div>
</div>
       <div className="container" id="register_section">
             <div className="container mt-3 p-4" id="form_div" style={{borderRadius:"20px"}}>
          <h3 className="text-center text-white">Update Menu</h3>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">
     Item Name
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
  <label htmlFor="exampleInputEmail1" className="form-label">
    Image
  </label>
  <input
    type="file"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    
    onChange={(e)=>setImage(e.target.files[0])}
  />
 
</div>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">
    Price
  </label>
  <input
    type="Number"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
  />
 
</div>





<button type="submit" className="btn btn-warning text-white mb-3">
 Update
</button>
</form>

      </div>
</div>
      </>
  )
}