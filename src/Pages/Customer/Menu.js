import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./Cart";
import Header from "../../Layout/Customer/Header";

export default function Menu() {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [CategoryId, setCategory] = useState("");
  const [count, setCount] = useState(1);
  const nav = useNavigate();

  const [quantity, setQuantity] = useState(1); 
  const [menuId, setMenuId] = useState(null);

  const CustomerId = sessionStorage.getItem("_id");

  // Increment and Decrement functions for quantity
  const Inc = () => {
    setCount(count + 1);
    setQuantity(count + 1); 
  };

  const Dec = () => {
    if (count > 1) {
      setCount(count - 1);
      setQuantity(count - 1);
    }
  };

  // const addToCart = (id) => {
  //   // Update menuId when item is selected
   
  // };

  // Add to cart function, sends quantity and menuId to backend
  const add = (id) => {
  
    setMenuId(id);
    const data = {
      quantity: quantity,
      menuItemId: menuId,
      customerId: CustomerId
    };

    axios
      .post("http://localhost:5000/customer/cart/add", data, {
        headers: { Authorization: sessionStorage.getItem("token") }
      })
      .then((res) => {
        toast.success(res.data.message);
        sessionStorage.setItem("cartId",res.data.data._id)
        console.log(res);
      })
      .catch((err) => {
        toast.error("Error adding item to cart: " + err.message);
      });
  };

  // Fetch categories and menu items
  useEffect(() => {
    axios
      .post("http://localhost:5000/admin/category/all")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        toast.error("Error fetching categories");
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/admin/menu/all")
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((err) => {
        toast.error("Error fetching menu items");
      });
  }, [CategoryId]);

  const FilterationFun = (id) => {
    setCategory(id);
    axios
      .post("http://localhost:5000/admin/menu/all", { categoryId: id })
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((err) => {
        toast.error("Error filtering menu");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container-xxl py-1 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Food Menu
          </h1>
        </div>
      </div>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Explore Categories
        </h5>
      </div>

      {/* Category Items Layout */}
      <div className="container d-flex flex-wrap justify-content-center">
        {data?.map((el, index) => (
          <div
            key={index}
            className="category-item d-flex flex-column align-items-center mx-3 mb-4"
          >
            <Link onClick={() => { FilterationFun(el._id); }}>
              <img
                src={"http://localhost:5000/" + el.image}
                height={100}
                width={100}
                alt={el.name}
                className="category-image mb-2"
              />
            </Link>
            <p className="text-warning">{el.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Food Menu
        </h5>
      </div>
      
      <div className="container ">
        {menu?.map((el, index) => (
          <div className="card my-2 me-2" style={{ height: "auto", width: "200px" }} key={index}>
            <img
              src={"http://localhost:5000/" + el.image}
              className="card-img-top mt-1 "
              style={{ height: "200px", width: "150px", margin: "10px auto" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <span className="m-1">Price: {el.price}</span>
              <button className="bg-warning m-1" onClick={Dec} style={{ border: "none" }}>
                -
              </button>
              <span>{count}</span>
              <button className="bg-warning m-1" onClick={()=>{Inc()}} style={{ border: "none" }}>
                +
              </button>

              {/* <button className="btn btn-primary" onClick={() => addToCart(el._id)}>
                Select Item
              </button> */}
              <button className="btn btn-success mt-2" onClick={() => add(el._id)}>
                Add To Cart
              </button>
            
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Keep a maximum width */
        }

        /* Styling for category items */
        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
          flex-shrink: 0;
        }

        .category-image {
          border-radius: 50%; /* Makes the images circular */
          border: 2px solid #fff; /* Border around the circle */
          padding: 5px; /* Padding inside the circle */
        }

        /* Adjusting the layout in a circular manner (using flexbox) */
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .container > .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }

        /* Responsive design: make categories wrap when screen is smaller */
        @media (max-width: 768px) {
          .container {
            justify-content: space-evenly;
          }
          .category-item {
            margin: 15px;
          }
        }
      `}</style>
    </>
  );
}
