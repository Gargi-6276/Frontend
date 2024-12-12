import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Pages/Customer/Cart";

export default function Header() {
  const token = sessionStorage.getItem("token");
 
  const logout = () => {
    sessionStorage.clear();
  };

  

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3" />
            Foodie
          </h1>
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
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link active">
              About
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
          </div>
          <div className="container d-flex justify-content-end align-items-center">
            {token ? (
              <div className="container d-flex justify-content-end align-items-center">
                <div>
               <Link to="/cart" >
                  <img
                    src="https://img.icons8.com/ios-filled/30/FFFFFF/shopping-cart-loaded--v1.png"
                    alt="shopping-cart-loaded--v1"
                  />
                  </Link>
                  <sup className="text-warning"style={{fontWeight:"900"}}>1</sup>
                 </div> 
          
                <div className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="https://img.icons8.com/pastel-glyph/30/FFFFFF/person-male--v3.png"
                      alt="person-male--v3"
                    />
                    
                  </Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>

                    <Link to="/login" className="dropdown-item" onClick={logout}>
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Link to="/signup" className="btn btn-primary py-2 px-4 mx-3">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-primary py-2 px-4 mx-3">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

    
    </>
  );
}
