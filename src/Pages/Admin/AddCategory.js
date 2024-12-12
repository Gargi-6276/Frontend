import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddCategory(){
    const nav=useNavigate()
    const [name,SetName]=useState("");
    const[Image,setImage]=useState("");


    const add=(e)=>{
        e.preventDefault()
        let data=new FormData()
        data.append("name",name)
        data.append("image",Image)
        axios.post("http://localhost:5000/admin/category/add",data,
            {headers:{authorization:sessionStorage.getItem("token")}}
        )
        .then((res)=>{
            if(res.data.success)toast.success(res.data.message)
            else toast.error(res.data.message)    
          setTimeout(() => {
            nav("/admin/managecategory")
          }, 1000);
        })
        .catch((err)=>{
            toast.error(err.message)
        })
        // reset all fields
        SetName("")
        setImage("")
    }
    return(
        <>
        <ToastContainer/>
         <div className="container-xxl py-3 bg-dark hero-header mb-4">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Add-Category
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <Link to="/admin/addcategory">Add-Category</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
        <div className="container" id="register_section">
              <div
                className="container  p-4"
                id="form_div"
                style={{ borderRadius: "20px" ,height:"auto",width:"500px"}}
              >
                <h3 className="text-center text-white">Add Category</h3>
                <form onSubmit={add}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label "
                    >
                      Category-Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    
                      value={name}
                      onChange={(e)=>SetName(e.target.value)}
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

                  <button
                    type="submit"
                    className="btn btn-warning text-white mb-3"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
        </>
    )
}