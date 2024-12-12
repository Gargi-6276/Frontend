export default function Footer(){
    return(
        <>
        <div
  className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          Foodie
        </h4>
        <a className="btn btn-link" href="">
          Home
        </a>
        <a className="btn btn-link" href="">
          About Us
        </a>
        <a className="btn btn-link" href="">
          Menu
        </a>
        <a className="btn btn-link" href="">
          Contact Us
        </a>
        <a className="btn btn-link" href="">
          Reservation
        </a>
       
      
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          Contact
        </h4>
        <p className="d-flex justify-content-around">
          <i className="fa fa-map-marker-alt me-3" />
          Khurla Kingra,Jalandhar
        </p>
        <p className="d-flex justify-content-around">
          <i className="fa fa-phone-alt me-5" />
          +91 6239982455
        </p>
        <p className="d-flex justify-content-around">
        
          <i className="fa fa-envelope me-3" />
          foodie@gmail.com
        </p>
        <div className="d-flex justify-content-evenly">
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-youtube" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          Opening
        </h4>
        <h5 className="text-light fw-normal">Monday - Saturday</h5>
        <p>09AM - 09PM</p>
        <h5 className="text-light fw-normal">Sunday</h5>
        <p>10AM - 08PM</p>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
          Newsletter
        </h4>
        <p>Sign up for our newsletter to get the latest menu updates, exclusive offers, and delicious recipes delivered straight to your inbox</p>
        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
          <input
            className="form-control border-primary w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </div>
 
</div>
<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
  <i className="bi bi-arrow-up" />
</a>

        </>
    )
}