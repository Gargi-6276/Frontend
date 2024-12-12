import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ChangePassword() {
  const _id = sessionStorage.getItem("_id");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const nav = useNavigate();

  const cross = () => {
    nav("/login");
  };
  const changepassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmpassword)
      toast.error("New Password and Confirm Password must match");
    let data = {
      password: password,
      newpassword: newPassword,
      confirmpassword: confirmpassword,
      _id: _id,
    };
    axios
      .post("http://localhost:5000/admin/changepassword", data, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
       
        if (res.data.success) toast.success(res.data.message);
        else toast.error(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
      setPassword("");
      setNewPassword("");
      setConfirmPassword("")
  };

  return (
    <>
      <ToastContainer />
      <div className="container " id="register_section">
        <div
          className="container mt-5 p-4 "
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
          <h3 className="text-center text-white">Change Password</h3>
          <form onSubmit={changepassword}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={confirmpassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-warning text-white mb-3">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
