import { Link, useNavigate } from "react-router-dom";

export default function AdminHeader(){
  const nav=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
   
  }
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
  <Link to="/" className="navbar-brand p-0">
    <h1 className="text-primary m-0">
      <i className="fa fa-utensils me-3" />
      Foodie
    </h1>
    {/* <img src="img/logo.png" alt="Logo"> */}
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="fa fa-bars" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav  ms-auto py-0 pe-4">
      <Link to="/admin" className="nav-item nav-link active text-white">
        Dashboard
      </Link>
     
      <div className="nav-item dropdown">
  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    Category
  </Link>
  <div className="dropdown-menu m-0">
    <Link to="/admin/addcategory" className="dropdown-item">
      Add
    </Link>
   
    <Link to="/admin/managecategory" className="dropdown-item">
      Manage-Category
    </Link>
  </div>
</div>

<div className="nav-item dropdown">
  <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    Menu
  </Link>
  <div className="dropdown-menu m-0">
    <Link to="/admin/addmenu" className="dropdown-item">
      Add
    </Link>
   
    <Link to="/admin/managemenu" className="dropdown-item">
      Manage-menu
    </Link>
  </div>
</div>

   

<Link to="/admin/managecustomer" class="nav-item text-warning nav-link">Customer</Link>
  

<Link to="/admin/manageorder" class="nav-item text-warning nav-link">Order</Link>
   
    <Link to="/login" class="nav-item text-warning nav-link" onClick={logout}>Log Out</Link>
    
     
    </div>
  
  </div>
  
</nav>

        </>
    )
}