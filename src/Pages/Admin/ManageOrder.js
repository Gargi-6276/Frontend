import axios from "axios"
import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import { ToastContainer, toast } from "react-toastify"

export default function ManageOrder(){
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.post("http://localhost:5000/customer/order/all",{},{
      headers:{Authorization:sessionStorage.getItem("token")}
    })
    .then((res)=>{
      // toast.success(res.data.message)
      setData(res.data.data)
      // console.log(res);
    })
    .catch((err)=>{
      // toast.error(err.message)
    })
  },[])
  return(
    <>
    <ToastContainer/>
              <div className="container-xxl py-1 bg-dark hero-header mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown">
    Manage-Orders
    </h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Manage-Orders</a>
        </li>
      
      </ol>
    </nav>
  </div>
</div> 


<div className="container manage_table mt-5 mb-3">
        <table class="table table-dark table-striped ">
        <thead>
    <tr className="">
    <th>S.No</th>
    <th> Name</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Address</th>
    <th>Status</th>
    <th>Action</th>
    
    </tr>
  </thead>
  <tbody>
    {
      data.map((i,index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{i.customerId.name}</td>
        <td>{i.customerId.email}</td>
        <td>{i.contact}</td>
      
        <td>{i.address}</td>
        <td>{i.status}</td>
        <td>
          <select>
            <option>Select Status</option>
            <option>Pending</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </td>
        </tr>
      ))
    }
  </tbody>
        </table>
        </div>
    </>
  )
}