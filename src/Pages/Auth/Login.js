import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  const token = sessionStorage.getItem("token");

  const cross = () => {
    nav("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/customer/login", data)
      .then((res) => {
        if (res.data.success) toast.success(res.data.message);
        else toast.error(res.data.message);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("_id", res.data.data._id);
        sessionStorage.setItem("customerId", res.data.data.customerId);
        sessionStorage.setItem("name", res.data.data.name);
        sessionStorage.setItem("role", res.data.data.role);
      
        console.log("_id", res.data.data._id);
        if (email === "admin@gmail.com") {
          setTimeout(() => {
            nav("/admin");
          }, 2000);
        } else {
          setTimeout(() => {
            nav("/");
          }, 2000);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // reset fields
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <ToastContainer />
     
      <div className="container " id="register_section">
        <div
          className="container mt-5 p-4"
          id="form_div"
          style={{ borderRadius: "20px" }}
        >
          <div className="d-flex justify-content-end">
            <img
              src="https://img.icons8.com/ios-filled/20/FFFFFF/x.png"
              onClick={cross}
              alt="x"
            />
          </div>
          <h3 className="text-center text-white">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="container d-flex justify-content-between">
              <div>
                <input type="checkbox" className="" />
                <label className="ps-2">Remember me</label>
              </div>
              <p className="me-2">
                <Link to="/changepassword">Forgot Password?</Link>
              </p>
            </div>

            <button type="submit" className="btn btn-warning text-white mb-3">
              Login
            </button>
          </form>
          <div className="container d-flex justify-content-start">
            <p className="me-2">
              Don't have an account?{" "}
              <Link to="/signup">Create a new account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
