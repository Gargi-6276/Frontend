import axios from "axios"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function Order(){
  const [name,setName]=useState("")
  const[contact,setContact]=useState("")
  const[address,setAddress]=useState("")
  const CustomerId = sessionStorage.getItem("customerId");
  const cartId = sessionStorage.getItem("cartId");
  const placeorder=(e)=>{
    e.preventDefault()
    let data={
      customerName:name,
      contact:contact,
      address:address,
      customerId:CustomerId,
      cartId:cartId
    }
    axios.post("http://localhost:5000/customer/order/add", data, {
      headers: { Authorization: sessionStorage.getItem("token") }
  })
  .then((res)=>{
    toast.success(res.data.message)
  })
  .catch((err)=>{
    toast.error(err.message)
  })
}
useEffect(()=>{
  axios.post("http://localhost:5000/admin/single",{_id:CustomerId},
    {headers:{Authorization:sessionStorage.getItem("token")}}
    
  
  )
  .then((res)=>{
    toast.success(res.data.message)
    setName(res.data.data.name)
    setAddress(res.data.data.address)
    setContact(res.data.data.contact) 
  })
  .catch((err)=>{
    toast.error(err.message)
  })
},[])
    return(
        <>
        <ToastContainer/>
        <div className="container-xxl py-1 bg-dark hero-header">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white  animated slideInDown">Order</h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Order</a>
        </li>
      
      </ol>
    </nav>
  </div>
</div>
<div className="container-xxl mt-3 d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay="0.1s"
 
>
  <div className="row g-0">
   
    <div className="col-md-12 bg-dark d-flex align-items-center">
      <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
        <h1 className="section-title ff-secondary text-start text-primary fw-normal">
          Order Now
        </h1>
       
        <form>
          <div className="row g-3">
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                 value={name}
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="email"
                  placeholder="Your Contact"
                 value={contact}
                />
                <label htmlFor="tel">Your Contact</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Your Address"
                  value={address}
                />
                <label htmlFor="text">Your Address</label>
              </div>
            </div>
           
         
           
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3"onClick={placeorder} type="submit">
              Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


        </>
    )
  }