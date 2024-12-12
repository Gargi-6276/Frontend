import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

export default function ManageMenu() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  let obj = {
    margin: "0 auto",
    display: "block",
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/admin/menu/all")
      .then((res) => {
        setData(res.data.data);

      
        setTimeout(() => {
          setloading(false);
        }, 500);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [loading]);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .post(
        "http://localhost:5000/admin/menu/delete",
        { _id: id },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then((res) => {
        console.log(res);
        window.confirm("Are You Sure to Delete?");

        setloading(true);
      })
      .catch((err) => {
        toast.error(err.message);
        setloading(false);
      });
  };
  return (
    <>
      <ToastContainer />

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Manage-Menu
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">ManageMenu</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {loading ? (
        <ClipLoader
          cssOverride={obj}
          loading={loading}
          size={100}
          color="red"
        />
      ) : (
        <div className="container manage_table mt-5 mb-3">
          <table class="table table-dark table-striped ">
            <thead>
              <tr className="">
                <th>S.No</th>
                <th>Menu-Item</th>
                <th>Price</th>
                <th>Image</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>
                    <img
                      src={"http://localhost:5000/" + el.image}
                      style={{ height: "100px", width: "100px" }}
                    />
               
                  </td>
                  <td>{el.size}</td>
                  <td>
                    <div>
                      <button className="bg-success m-1 btn_manage">
                        <Link to={"/admin/updatemenu/" + el._id}>
                          <img src="https://img.icons8.com/pastel-glyph/20/FFFFFF/create-new--v3.png" />
                        </Link>
                      </button>
                      <button
                        className="bg-danger m-1 btn_manage"
                        onClick={() => handleDelete(el._id)}
                      >
                        <img src="https://img.icons8.com/ios-filled/20/FFFFFF/delete-trash.png" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
