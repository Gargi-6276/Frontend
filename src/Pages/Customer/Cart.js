import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
  const nav = useNavigate();
  const[data,setData]=useState([])
  const CustomerId = sessionStorage.getItem("_id");
  const cross = () => {
    nav("/menu");
  };
  const cartId = sessionStorage.getItem("cartId");
  useEffect(() => {
    let id = cartId;
    axios
      .post(
        "http://localhost:5000/customer/cart/all",
        { _id: id,customerId:CustomerId},
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then((res) => {
        toast.success(res.data.message);
     
        setData(res.data.data)
        console.log(res.data.data);
       
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <>
    <ToastContainer/>
      <div>
       
        <div className="d-flex justify-content-between m-3">
        <h6>My Cart</h6>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/40/multiply.png"
            onClick={cross}
          />
        </div>
       {
        data.map((i,index)=>(
          <div className="d-flex justify-content-evenly">
            <p>{index+1}</p>
            <img src={"http://localhost:5000/"+i.menuItemId.image} height={50} width={50}/>
          <p>{i.menuItemId.name}</p>
          <p>{i.menuItemId.price}</p>
          <p>{i.quantity}</p>
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>
          </div>
        ))
       }
        <Link to="/order"><button>order</button></Link>
      </div>
    </>
  );
}
