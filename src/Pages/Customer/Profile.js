import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Profile() {
  const customerId = sessionStorage.getItem("customerId");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const nav = useNavigate();
  const cross = () => {
    nav("/");
  };
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/admin/single",
        { _id: customerId },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then((res) => {
        // toast.success(res.data.message);
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setContact(res.data.data.contact);
        setAddress(res.data.data.address);
      })
      .catch((err) => {
        // toast.error(err.message);
      });
  }, []);
  
  return (
    <>
      <ToastContainer />
      <div className="container" id="register_section">
        <div
          className="container mt-5 p-4"
          id="form_div"
          style={{ borderRadius: "20px", width: "500px" }}
        >
          <div className="d-flex justify-content-end">
            <img
              src="https://img.icons8.com/ios-filled/20/FFFFFF/x.png"
              onClick={cross}
              alt="x"
            />
          </div>
          <h3 className="text-center text-white">Profile</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                value={email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contact
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputPassword1"
                value={contact}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <textarea
                col="35"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={address}
              />
            </div>

            <Link to={"/updateprofile/"+customerId}>
              <button type="submit" className="btn btn-warning text-white mb-3">
                Update
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
