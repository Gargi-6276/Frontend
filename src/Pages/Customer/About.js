export default function About(){
    return(
        <>
        <div className="container-xxl py-1 bg-dark hero-header mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-white active" aria-current="page">
          About
        </li>
      </ol>
    </nav>
  </div>
</div>
<div className="container-xxl py-1">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.1s"
              src="/assets/img/vanillas.jfif"
            />
          </div>
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.3s"
              src="/assets/img/butterscotch.jfif"
              style={{ marginTop: "25%" }}
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.5s"
              src="/assets/img/strawberryS.jfif"
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.7s"
              src="/assets/img/virginMojito.jfif"
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


        </>
    )
}