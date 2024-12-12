import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"

export default function Dashboard(){
 const [data,setData]=useState("")
 useEffect(()=>{
  axios.post("http://localhost:5000/admin/dashboard",{},
    {headers:{Authorization:sessionStorage.getItem("token")}}
  )
  .then((res)=>{
    setData(res.data.data)
    // toast.success(res.data.message)
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
     Dashboard
    </h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
       
      </ol>
    </nav>
  </div>
</div>
<div className="container-xxl py-1">                     
  <div className="container">                                                     
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-user-tie text-primary mb-4" />
            <h5>{data.totalCustomers}</h5>
            <p>
            Total Customers
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
          <img className="mb-4" width="50" height="50" src="https://img.icons8.com/ios-filled/40/FAB005/street-food--v2.png" alt="street-food--v2"/>
            <h5>{data.totalCategories}</h5>
            <p>
            Total Categories
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
           
          <img className="mb-4 " width="50" height="50" src="https://img.icons8.com/pastel-glyph/40/FAB005/junk-food--v1.png" alt="junk-food--v1"/>
            <h5>{data.totalMenuItems}</h5>
            <p>
           Total MenuItems
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
        
          <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
            <h5>{data.totalOrders}</h5>
            <p>
           Total Orders
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}