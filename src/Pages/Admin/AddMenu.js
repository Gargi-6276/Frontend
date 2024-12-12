import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddMenu() {
  const [name, SetName] = useState("");
  const [Image, setImage] = useState("");
  const [price, SetPrice] = useState("");
  const [size,setSize]=useState("")
  const [category, setCategory] = useState([]);
  const [selectCategory, SetSelectCategory] = useState("");
  const nav=useNavigate()

  
  useEffect(() => {
    axios
      .post("http://localhost:5000/admin/category/all")
      .then((res) => {
    
        // toast.success(res.data.message);
        setCategory(res.data.data);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  }, []);

  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", name);
    data.append("image", Image);
    data.append("price", price);
    data.append("categoryId",selectCategory)
    data.append("size",size)
    axios
      .post(`http://localhost:5000/admin/menu/add`, data, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(selectCategory);
        if (res.data.success) toast.success(res.data.message);
        else toast.error(res.data.message);
        setTimeout(() => {
          nav("/admin/managemenu")
        },1000);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
      // reset all fields
      SetName("")
      SetSelectCategory("")
      SetPrice("")

  };
  return (
    <>
      <ToastContainer />
      <div className="container-xxl py-3 bg-dark hero-header mb-4">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Add Menu-Item
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Add Menu-Item</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container" id="register_section">
        <div
          className="container  p-4"
          id="form_div"
          style={{ borderRadius: "20px", height: "auto", width: "500px" }}
        >
          <h3 className="text-center text-white">Add Menu-Item</h3>
          <form onSubmit={add}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Category
              </label>
              <br />
              <select
               value={selectCategory} onChange={(e)=>{SetSelectCategory(e.target.value)}}
               style={{width:"440px",padding:"8px"}}
               >
               <option>Select Category</option>
                {category.map((el, index) => (
                  <option key={index} value={el._id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Menu-Item
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={name}
                onChange={(e) => {
                  SetName(e.target.value);
                }}
              />
            </div>
            <label htmlFor="exampleInputPassword1" className="form-label">
                Size
              </label>
            <select value={size} onChange={(e)=>setSize(e.target.value)}
                  style={{width:"440px",padding:"8px"}}
              >
              <option >Select Size</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label mt-3">
                Price
              </label>
              <input
                type="Number"
                className="form-control"
                id="exampleInputPassword1"
                value={price}
                onChange={(e) => {
                  SetPrice(e.target.value);
                }}
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
              
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>

            <button type="submit"  className="btn btn-warning text-white mb-3">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
