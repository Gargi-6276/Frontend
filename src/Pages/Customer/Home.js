import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
export default function Home(){
  const [data, setData] = useState([]);
  const[menu,setMenu]=useState([])

  useEffect(() => {
    axios
      .post("http://localhost:5000/admin/category/all")
      .then((res) => {
        setData(res.data.data);
        // toast.success(res.data.data.message);
      })
      .catch((err) => {
        // toast.error("Error: " + err);
      });
  }, []);
useEffect(()=>{
  axios.post("http://localhost:5000/admin/menu/all")
  .then((res)=>{
    setMenu(res.data.data)
  })
  .catch((err)=>{
    // toast.error("something went wrong")
  })
},[])

    return(
        <>
      
 <ToastContainer/>
  <div className="container-xxl py-1 bg-dark hero-header mb-5">
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white animated slideInLeft">
            Enjoy Our
            <br />
            Delicious Meals
          </h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">
          Welcome to Foodie, where Italy’s finest flavors come to life. From rich, aromatic espresso to freshly baked pastries, we serve a true taste of Italy in every cup and bite. Whether you’re here for a quick pick-me-up or a leisurely meal, we invite you to relax, indulge, and savor the essence of Italian hospitality.
          </p>
          <Link
            to="/"
            className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
          >
            Book A Table
          </Link>       
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden ">
          <img className="img-fluid pizza_img" src="/assets/img/Home.png" width={500} height={500} alt="" />
          
        </div>
      </div>
    </div>
  </div>

<div className="container-xxl py-1">                     
  <div className="container">                                                     
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-user-tie text-primary mb-4" />
            <h5>Master Chefs</h5>
            <p>
            Leading with excellence, expertise, and unwavering dedication
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-utensils text-primary mb-4" />
            <h5>Quality Food</h5>
            <p>
            At Foodie, we believe in serving only the highest quality ingredients.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
            <h5>Online Order</h5>
            <p>
            Order online from Foodie and enjoy our delicious dishes delivered right to your door.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item rounded pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-headset text-primary mb-4" />
            <h5>24/7 Service</h5>
            <p>
            Foodie is here for you 24/7—order online and enjoy our mouthwatering dishes!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.1s"
              src="/assets/img/about-1.jpg"
            />
          </div>
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.3s"
              src="/assets/img/about-2.jpg"
              style={{ marginTop: "25%" }}
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.5s"
              src="/assets/img/about-3.jpg"
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.7s"
              src="/assets/img/about-4.jpg"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <h5 className="section-title ff-secondary text-start text-primary fw-normal">
          About Us
        </h5>
        <h1 className="mb-4">
          <i className="fa fa-utensils text-primary me-2" />
          Foodie
        </h1>
      
        <p className="mb-4">
        Welcome to Foodie, where Italy’s finest flavors come to life. From rich, aromatic espresso to freshly baked pastries, we serve a true taste of Italy in every cup and bite. Whether you’re here for a quick pick-me-up or a leisurely meal, we invite you to relax, indulge, and savor the essence of Italian hospitality.
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                15
              </h1>
              <div className="ps-4">
                <p className="mb-0">Years of</p>
                <h6 className="text-uppercase mb-0">Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                50
              </h1>
              <div className="ps-4">
                <p className="mb-0">Popular</p>
                <h6 className="text-uppercase mb-0">Master Chefs</h6>
              </div>
            </div>
          </div>
        </div>
        <a className="btn btn-primary py-3 px-5 mt-2" href="">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>



{/*content of menu*/}
<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
  <h5 className="section-title ff-secondary text-center text-primary fw-normal mb-5">
    Explore Categories
  </h5>
  
</div>
<div className="container d-flex flex-wrap justify-content-center">
        {data.map((el, index) => (
          <div
            key={index}
            className="category-item d-flex flex-column align-items-center mx-3 mb-4"
          >
            <img
              src={"http://localhost:5000/" + el.image}
              height={100}
              width={100}
              alt={el.name}
              className="category-image mb-2"
            />
            <p className="text-warning">{el.name}</p>
          </div>
        ))}
      </div>






<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
  <h5 className="section-title ff-secondary text-center text-primary fw-normal mb-5">
    Food Menu
  </h5>
  
</div>
<div className="container d-flex flex-wrap justify-content-center">
      {menu.map((el,index)=>(
        
        <div class="card my-2 me-2"style={{height:"auto",width:"200px"}} key={index}>
        <img src={"http://localhost:5000/"+el.image} class="card-img-top mt-1 " style={{height:"200px",width:"150px",margin:"10px auto"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{el.name}</h5>
        <select>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button className="bg-warning m-1" style={{border:"none"}}>-</button>
        <button className="bg-warning m-1" style={{border:"none"}} >+</button>
          <Link to="/cart" class="btn btn-primary">Add To Cart</Link>
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
    )
}