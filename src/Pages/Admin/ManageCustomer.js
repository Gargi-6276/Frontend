import axios from "axios"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import ApiServices from "../../ApiServices"
import { useParams } from "react-router-dom"

export default function ManageCustomer(){
  const[status,setStatus]=useState(true)
    const [id,setId]=useState("")
    const [data,setData]=useState([])
    useEffect(()=>{
        ApiServices.AllCustomer()
        .then((res)=>{
            setData(res.data.data)
            // toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(err)
        })
    },[])

    const changeStatus=()=>{
      
      axios.post("http://localhost:5000/admin/changeStatus",{status:status,_id:id},{headers:{Authorization:sessionStorage.getItem("token")}})
      .then((res)=>{
     
        if(res.data.status)toast.success(res.data.message)
          else toast.error(res.data.message)
        setStatus(res.data.data.status)
        setId(res.data.data.customerId)
        console.log(res.data.data.customerId);
      
      })
      .catch((err)=>{
        toast.error("something went wrong")
      })
    }
    return(
        <>
        <ToastContainer/>
              <div className="container-xxl py-5 bg-dark hero-header mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown">
    Manage-Customer
    </h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Manage-Customer</a>
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
   
   {data.map((el,index)=>(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.contact}</td>
          <td>{el.address}</td>
          <td>{el.userId.status ? 'Active' : 'Inactive'}</td>
            <td>
                <div className="">
                    <button className="bg-success m-1 btn_manage"onClick={changeStatus}><img src="https://img.icons8.com/glyph-neue/30/FFFFFF/user-female-circle.png"/></button>
                    <button className="bg-danger m-1 btn_manage"><img src="https://img.icons8.com/glyph-neue/30/FFFFFF/unfriend-female.png"/></button>
                </div>
            </td>
        </tr>
   ))}
  </tbody>
</table>
        </div>
        </>
    )
}