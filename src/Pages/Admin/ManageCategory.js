import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ApiServices from "../../ApiServices";
import { ClipLoader } from "react-spinners";
export default function ManageCategory() {
  let obj = {
    margin: "0 auto",
    display: "block",
  };
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    ApiServices.AllCategory()
      .then((res) => {
        setData(res.data.data);
        toast.success(res.data.data.message);
         setTimeout(() => {
          setloading(false);
         }, 1000); 
       
      })
      .catch((err) => {
        toast.error(err);
        setloading(false);
      });
  }, [loading]);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .post(
        "http://localhost:5000/admin/category/delete",
        { _id: id },
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then((res) => {
        // console.log(res);
        window.confirm("Are You Sure to Delete?");
        setTimeout(() => {
          setloading(true);
         },500); 
       
          
       
        // if (res.data.success) toast.success(res.data.message);
        // else toast.error(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
        setloading(false);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="container-xxl py-3 bg-dark hero-header mb-4">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Manage-Category
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Manage-Category</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {loading ? (
        <ClipLoader cssOverride={obj} color="red" size={100} />
      ) : (
        <div className="container manage_table mx-auto">
          <table class="table table-dark table-striped ">
            <thead>
              <tr className="">
                <th>S.No</th>
                <th>Category Name</th>
                <th>Image</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>
                    <img
                      src={"http://localhost:5000/" + el.image}
                      style={{ height: "80px", width: "100px" }}
                    />
                  </td>

                  <td>
                    <div>
                      <button className="bg-success m-1 btn_manage">
                        <Link to={"/admin/updatecategory/" + el._id}>
                          {" "}
                          <img src="https://img.icons8.com/pastel-glyph/20/FFFFFF/create-new--v3.png" />
                        </Link>
                      </button>
                      <button
                        className="bg-danger m-1 btn_manage"
                        onClick={() => {
                          handleDelete(el._id);
                        }}
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
